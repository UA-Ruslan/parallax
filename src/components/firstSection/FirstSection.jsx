import React from "react";
import style from "./FirstSection.module.scss"
import fakeImg from "../../images/secondSection/fakeBG.webp"

const FirstSection = (props) => {

    const firstSectionOpacity = {
        zIndex: `${!props.intervalOnClick ? 100 : 0}`,
        display: `${!props.intervalOnClick ? "block" : "none"}`,
        // opacity: `${!props.intervalOnClick ? 1 : 0}`,
        transition: "1s cubic-bezier(.38,.18,.7,.92)",
    }

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
             style={firstSectionOpacity}
             className={props.isButtonClick
                 ? `${style.firstSectionWrapper} ${style.buttonActive}`
                 : style.firstSectionWrapper}>

            {images}
            {/*<img className={style.fakeImg} src={fakeImg} alt="fakeImg"/>*/}
        </div>
    )
}

export default FirstSection;