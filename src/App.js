import React, {useEffect, useRef, useState, Suspense, lazy} from "react";
import './App.scss';
import ImagesData from "./ImagesData";
import fakeImg from "./images/secondSection/fakeBG.webp";
import fakeImgSmallHeight from "./images/secondSection/fakeBGSmallHeight.webp";
const FirstSection = lazy(() => import("./components/firstSection/FirstSection"));
const SecondSection = lazy(() => import("./components/secondSection/SecondSection"));

function App() {
    const mouseMoveRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [mouseMove, setMouseMove] = useState(false);
    const [directX, setDirectX] = useState(0);
    const [directY, setDirectY] = useState(0);
    const [isWheelActive, setWheelActive] = useState(false)
    const [windowHeight, _setWindowHeight] = useState(window.innerHeight);
    const [isButtonClick, setButtonClick] = useState(false)
    const [position, setPosition] = useState(0);
    const [isMobileDevise, setIsMobileDevise] = useState(false);

    //----------------------------type-of-devise-------------------------//
    const handleMediaQueryChange = (e) => {
        setIsMobileDevise(e.matches);
    };
    useEffect(() => {
        const mediaQuery = window.matchMedia("(any-pointer: coarse)");
        mediaQuery.addEventListener("change", handleMediaQueryChange);
        setIsMobileDevise(mediaQuery.matches);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);
    //---------------------------/type-of-devise-------------------------//

    //------------------------span-scroll-opacity------------------------//
    useEffect(() => {
        if (isWheelActive) {
            const wheelActiveTimeout = setTimeout(() => {
                setWheelActive(false)
            }, 1500)

            return () => {
                clearTimeout(wheelActiveTimeout);
            };
        }
    }, [isWheelActive, setWheelActive])
    //------------------------/span-scroll-opacity------------------------//
    //-----------------transition-between-sections------------------------//
    useEffect(() => {
        if (isButtonClick && isMobileDevise) {
            const timeOut = setTimeout(() => {
                setScale(10)
            }, 1000)
            return () => clearTimeout(timeOut)
        } else if (!isButtonClick && scale < 10 && scale !== 1 && isMobileDevise) {
            const interval = setInterval(() => {
                if (!isButtonClick && scale > 1) {
                    setScale(prevScale => prevScale - 1);
                }
            }, 50)
            return () => clearInterval(interval)
        }
    }, [isButtonClick, scale, isMobileDevise]);
    //-----------------/transition-between-sections------------------------//

    const parallaxOnMouseMove = (e) => {
        const windowX = e.clientX - window.innerWidth / 2;
        const windowY = e.clientY - window.innerHeight / 2;
        setDirectX(windowX)
        setDirectY(windowY)
    };
    const parallaxOnTouchMove = (e) => {
        const touch = e.touches[0];
        const windowX = touch.clientX - window.innerWidth / 2;
        const windowY = touch.clientY - window.innerHeight / 2;
        setDirectX(windowX);
        setDirectY(windowY);
    };

    //----------------------------span-visibility---------------------//
    const onMouseMove = () => {
        setMouseMove(true);
        clearTimeout(mouseMoveRef.current);
        mouseMoveRef.current = setTimeout(() => {
            setMouseMove(false);
        }, 1000);
    };
    //----------------------------/span-visibility---------------------//

    const onWheel = (e) => {
        if (e.deltaY !== 0) {
            setWheelActive(true)
        }
        if (e.deltaY < 0 && scale < 10) {
            setScale(scale + 1);
        } else if (e.deltaY > 0 && scale > 1) {
            setScale(scale - 1);
        }
    };

    const onCLick = () => {
        setButtonClick(!isButtonClick)
        setScale(9)
    };

    return (
        <div onTouchMove={onMouseMove} onMouseMove={onMouseMove} className="App">
            <Suspense>
                <FirstSection
                    parallaxOnMouseMove={parallaxOnMouseMove}
                    parallaxOnTouchMove={parallaxOnTouchMove}
                    directX={directX}
                    directY={directY}
                    dataFirstSection={ImagesData.dataFirstSection}
                    scale={scale}
                    onWheel={onWheel}
                />

                <SecondSection
                    parallaxOnMouseMove={parallaxOnMouseMove}
                    parallaxOnTouchMove={parallaxOnTouchMove}
                    directX={directX}
                    directY={directY}
                    dataSecondSection={ImagesData.dataSecondSection}
                    scale={scale}
                    onWheel={onWheel}
                    setWheelActive={setWheelActive}
                    windowHeight={windowHeight}
                    position={position}
                    setPosition={setPosition}
                />
            </Suspense>

            {
                !isMobileDevise
                    ? isWheelActive
                        ? ""
                        : <span className={`spanStyle  scroll`}>USE SCROLL</span>
                    : !isButtonClick
                        ? <button onClick={onCLick} className="button">FORWARD</button>
                        : position < 0 ? "" : <button onClick={onCLick} className="button">BACK</button>
            }
            {
                isMobileDevise
                    ? mouseMove
                        ? ""
                        : <span className="spanStyle">MOVE YOUR FINGER</span>
                    : mouseMove
                        ? ""
                        : <span className="spanStyle">MOVE YOUR MOUSE</span>
            }

            {
                windowHeight > 560
                    ?
                    <img
                        style={{transform: `translate(calc(-50% + ${directX * -0.03}px), calc(-50% + ${directY * 0.045}px))`}}
                        className={scale >= 3 ? `fakeImg` : `fakeImg fakeImgActive`} src={fakeImg} alt="fakeImg"/>
                    : <img
                        style={{transform: `translate(calc(-50% + ${directX * -0.03}px), calc(-50% + ${directY * 0.045}px))`}}
                        className={scale >= 3 ? `fakeImgSmallHeight` : `fakeImgSmallHeight fakeImgActive`} src={fakeImgSmallHeight} alt="fakeImg"/>
            }
        </div>
    );

}

export default App;






