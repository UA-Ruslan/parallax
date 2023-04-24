import './App.css';
import FirstSection from "./components/firstSection/FirstSection";
import React, {useEffect, useRef, useState} from "react";
import SecondSection from "./components/secondSection/SecondSection";
import ImagesData from "./ImagesData";
import fakeImg from "./images/secondSection/fakeBG.webp";

function App() {
    const mouseMoveTimeoutIdRef = useRef(null);
    const [isButtonClick, setButtonClick] = useState(false);
    const [mouseMove, setMouseMove] = useState(false);
    const [directX, setDirectX] = useState(0);
    const [directY, setDirectY] = useState(0);
    const [scrollValue, setScrollValue] = useState(0);
    const [btnOpacity, setBtnOpacity] = useState({});

    const parallaxOnMouseMove = (e) => {
        const windowX = e.clientX - window.innerWidth / 2;
        const windowY = e.clientY - window.innerHeight / 2;
        setDirectX(windowX)
        setDirectY(windowY)
    };
    useEffect(() => {
        if (scrollValue < 0) {
            const btnStyle = {
                zIndex: 0,
            }
            setBtnOpacity(btnStyle)
        } else {
            const btnStyle = {
                zIndex: 999,
            }
            setBtnOpacity(btnStyle)
        }
    }, [scrollValue]);

    //----------------------------span-visibility---------------------//
    const onMouseMove = () => {
        setMouseMove(true);
        clearTimeout(mouseMoveTimeoutIdRef.current);
        mouseMoveTimeoutIdRef.current = setTimeout(() => {
            setMouseMove(false);
        }, 1000);
    };
    //----------------------------/span-visibility---------------------//

    const onCLick = () => {
        setButtonClick(!isButtonClick)
    };

    return (
        <div onMouseMove={onMouseMove} className="App">
            {!isButtonClick ? <button style={btnOpacity} onClick={onCLick} className="button">FORWARD</button> :
                <button style={btnOpacity} onClick={onCLick} className="button">BACK</button>}
            {mouseMove ? "" : <span className="spanStyle">MOVE YOUR MOUSE</span>}
            <FirstSection
                isButtonClick={isButtonClick}
                parallaxOnMouseMove={parallaxOnMouseMove}
                directX={directX}
                directY={directY}
                dataFirstSection={ImagesData.dataFirstSection}
            />
            <SecondSection
                parallaxOnMouseMove={parallaxOnMouseMove}
                directX={directX}
                directY={directY}
                dataSecondSection={ImagesData.dataSecondSection}
                setScrollValue={setScrollValue}
                isButtonClick={isButtonClick}
            />


            <img className={!isButtonClick ?  "fakeImg" + " " + "fakeImgActive" : "fakeImg"} src={fakeImg} alt="fakeImg"/>
        </div>
    );

}

export default App;
