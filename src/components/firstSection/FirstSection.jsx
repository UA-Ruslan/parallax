import React from "react";
import style from "./FirstSection.module.scss"

const FirstSection = (props) => {

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
        <div onWheel={props.onWheel} onTouchMove={props.parallaxOnTouchMove} onMouseMove={props.parallaxOnMouseMove}
             style={props.scale >= 10 ? {display:"none"} : {display:"block", transform:`scale(${props.scale})`}}
             className={style.firstSectionWrapper}>

            {images}
        </div>
    )
}

export default FirstSection;