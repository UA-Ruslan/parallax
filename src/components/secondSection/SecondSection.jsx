import React, {useEffect, useState} from "react";
import style from "./SecondSection.module.scss";
import shuttle from "../../images/secondSection/spaceship1.gif";



const SecondSection = (props) => {
    const [scrollTop, setScrollTop] = useState(false);
    const [shuttleStyle, setShuttleStyle] = useState({});
    const [windowWidth, _setWindowWidth] = useState(window.innerWidth);
//-----------------shuttle-anim-onScroll-and-response--------------------//
    useEffect(() => {
        if (windowWidth >= 768) {
            const shuttleMove = {
                position: "absolute",
                bottom: `calc(10% + (${props.position}px * (-1.5)))`,
                left: `calc(80% + (${props.position}px * 1.7))`,
                transition: ".5s cubic-bezier(.2, .49, .32, .99)",
                width: `calc(350px + (${props.position}px * 0.3))`,
                zIndex: 88,
                transform: `translate(-50%) rotateZ(0deg)`,
                opacity: 1,
            }
            if (props.position < 0 && props.position > -790) {
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
                bottom: `calc(10% + (${props.position}px * -1.5))`,
                left: `calc(5% + (${props.position}px * (-.3)))`,
                transition: ".5s cubic-bezier(.2, .49, .32, .99)",
                width: `calc(350px + (${props.position}px * 0.3))`,
                zIndex: 88,
                transform: `rotateY(150deg)  `,
                opacity: 1,
            }
            setShuttleStyle(shuttleMove)
            if (props.position < 0 && props.position > -790) {
                shuttleMove.transform = ` rotateY(150deg) `
            }
            if (scrollTop) {
                shuttleMove.opacity = 0
            } else {
                shuttleMove.opacity = 1
            }
        }
    }, [props.position, windowWidth, scrollTop]);
//-----------------/shuttle-anim-onScroll-and-response--------------------//

    const handleScroll = (e) => {
        props.setWheelActive(true)
        const container = e.target;
        const scrollTop = container.scrollTop;
        props.setPosition(scrollTop)
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
    });

    return (
        <div onWheel={props.position === 0 ? props.onWheel : undefined} onScroll={handleScroll}
             onTouchMove={props.parallaxOnTouchMove} onMouseMove={props.parallaxOnMouseMove}
             className={props.scale >= 2 ? style.secondSectionWrapper : style.secondSectionWrapper + " " + style.secondSectionWrapperInactive}>

            {images}

            <img src={shuttle} style={shuttleStyle} alt="shuttle"/>

            <h1 className={scrollTop ? style.theEndActive : `${style.theEndActive} ${style.theEndInactive}`}>THE
                END</h1>
        </div>
    )
};

export default SecondSection;