import React, {useEffect, useState} from "react";
import style from "./SecondSection.module.scss"
import shuttle from "../../images/secondSection/spaceship1.gif"

const SecondSection = (props) => {
    const [position, setPosition] = useState(0)
    const [scrollTop, setScrollTop] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    const [shuttleStyle, setShuttleStyle] = useState({})

    const innerWindowWidth = window.innerWidth
    useEffect(() => {
        setWindowWidth(innerWindowWidth)
    },[innerWindowWidth]);
    useEffect(() => {
        if (windowWidth >= 768) {
            const shuttleMove = {
                position: "absolute",
                top: `calc(70% + (${position}px * 1.5))`,
                left: `calc(80% + (${position}px * 1.7))`,
                transition: ".5s cubic-bezier(.2, .49, .32, .99)",
                width: `calc(350px + (${position}px * 0.3))`,
                zIndex: 88,
                transform: `translate(-50%) rotateZ(0deg)`,
                opacity: 1,
            }
            if (position < 0 && position > -790) {
                shuttleMove.transform = `translate(-50%) rotateZ(15deg)`
            }
            setShuttleStyle(shuttleMove)
            if (scrollTop) {
                shuttleMove.opacity = 0
            } else {
                shuttleMove.opacity = 1
            }

        } else {
            const shuttleMove = {
                position: "absolute",
                top: `calc((50% + 180px) + (${position}px * 1.5))`,
                left: `calc(5% + (${position}px * (-.3)))`,
                transition: ".5s cubic-bezier(.2, .49, .32, .99)",
                width: `calc(350px + (${position}px * 0.3))`,
                zIndex: 88,
                transform: `rotateY(150deg)  `,
                opacity: 1,
            }
            setShuttleStyle(shuttleMove)
            if (position < 0 && position > -790) {
                shuttleMove.transform = ` rotateY(150deg) `
            }
            if (scrollTop) {
                shuttleMove.opacity = 0
            } else {
                shuttleMove.opacity = 1
            }
        }
    }, [position, windowWidth, scrollTop])

    const handleScroll = (e) => {
        const container = e.target;
        const scrollTop = container.scrollTop;
        props.setScrollValue(scrollTop)
        setPosition(scrollTop)
        if ((container.scrollHeight - 2) <= ((container.scrollTop * (-1)) + container.clientHeight)) {
            setScrollTop(true)
        } else {
            setScrollTop(false)
        }
    };

    const images = props.dataSecondSection.map((img, index) => {
        const parallax = {
            transform: `translate(calc(-50% + ${-props.directX * img.speedX}px), calc(-50% + ${props.directY * img.speedY}px))`,
            transition: ".45s cubic-bezier(.2, .49, .32, .99)",
        }
        return (
            <img key={index} src={img.src} alt={img.className} style={parallax} className={`${style[img.className]}`}/>
        )
    })

    return (
        <div  onScroll={handleScroll} onMouseMove={props.parallaxOnMouseMove} className={props.isButtonClick ? style.secondSectionWrapper : style.secondSectionWrapper + " " + style.secondSectionWrapperInactive}>
            {images}
            <img src={shuttle} style={shuttleStyle} alt="shuttle"/>
        </div>
    )
}

export default SecondSection;