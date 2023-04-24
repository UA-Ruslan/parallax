import React, {useEffect, useState} from "react";
import style from "./FirstSection.module.scss"

const FirstSection = (props) => {
    const [firstSectionDisplayNone, setFirstSectionDisplayNone] = useState(false)

    useEffect(() => {
        if (props.isButtonClick === true) {
            const clickInterval = setTimeout(() => {
                setFirstSectionDisplayNone(true)
            }, 2000)
            return () => {
                clearTimeout(clickInterval);
            };
        } else {
            setFirstSectionDisplayNone(false)
        }

    },[props.isButtonClick]);

    const images = props.dataFirstSection.map((img, index) => {

        const parallax = {
            transform: `translate(calc(-50% + ${-props.directX * img.speedX}px), calc(-50% + ${props.directY * img.speedY}px))`,
            transition: ".45s cubic-bezier(.2, .49, .32, .99)",
        }
        return (
            <img key={index} src={img.src} alt={img.className} style={parallax} className={`${style[img.className]}`}/>
        )
    })

    return (
        <div onMouseMove={props.parallaxOnMouseMove}
             style={firstSectionDisplayNone ? {display:"none"} : {display:"block"}}
             className={props.isButtonClick
                 ? `${style.firstSectionWrapper} ${style.buttonActive}`
                 : style.firstSectionWrapper}>

            {images}
        </div>
    )
}

export default FirstSection;