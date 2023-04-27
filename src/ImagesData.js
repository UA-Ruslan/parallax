import cave1 from "./images/cave/cave1.webp";
import cave2 from "./images/cave/cave2.webp";
import cave3 from "./images/cave/cave3.webp";
import cave4 from "./images/cave/cave4.webp";
import cave5 from "./images/cave/cave5.webp";
import plant1 from "./images/plants/plant1.webp";
import plant2 from "./images/plants/plant2.webp";
import plant3 from "./images/plants/plant3.webp";
import plant4 from "./images/plants/plant4.webp";
import plant5 from "./images/plants/plant5.webp";
import plant6 from "./images/plants/plant6.webp";
import plant7 from "./images/plants/plant7.webp";
import fog1 from "./images/fog/fog1.webp";
import fog2 from "./images/fog/fog2.webp";
import fog5 from "./images/fog/fog6.webp";
//--------------------------------------------------
import sky from "./images/secondSection/sky.webp"
import bg1 from "./images/secondSection/bg1.webp"
import mount1 from "./images/secondSection/mount1.webp"
import mount2 from "./images/secondSection/mount2.webp"
import mount3 from "./images/secondSection/mount3.webp"
import mount4 from "./images/secondSection/mount4.webp"
import tree from "./images/secondSection/tree.webp"
import spaceSky from "./images/secondSection/moon.webp"
import moon from "./images/secondSection/moon1.webp"



let ImagesData = {
    dataFirstSection: [
        {src: cave1, speedX: 0.03, speedY: 0.035, className: "cave1"},
        {src: cave2, speedX: 0.06, speedY: 0.049, className: "cave2"},
        {src: cave3, speedX: 0.08, speedY: 0.056, className: "cave3"},
        {src: cave4, speedX: 0.09, speedY: 0.060, className: "cave4"},
        {src: cave5, speedX: 0.09, speedY: 0.060, className: "cave5"},
        {src: plant1, speedX: 0.035, speedY: 0.035, className: "plant1"},
        {src: plant2, speedX: 0.035, speedY: 0.035, className: "plant2"},
        {src: plant3, speedX: 0.06, speedY: 0.06, className: "plant3"},
        {src: plant4, speedX: 0.015, speedY: 0.035, className: "plant4"},
        {src: plant5, speedX: 0.035, speedY: 0.035, className: "plant5"},
        {src: plant6, speedX: 0.035, speedY: 0.035, className: "plant6"},
        {src: plant7, speedX: 0.035, speedY: 0.035, className: "plant7"},
    ],
    dataSecondSection: [
        {src: sky, speedX: 0.03, speedY: 0.035, className: "sky"},
        {src: bg1, speedX: 0.02, speedY: 0.035, className: "bg1"},
        {src: mount1, speedX: 0.04, speedY: 0.045, className: "mount1"},
        {src: mount2, speedX: 0.03, speedY: 0.035, className: "mount2"},
        {src: mount3, speedX: 0.04, speedY: 0.045, className: "mount3"},
        {src: mount4, speedX: 0.05, speedY: 0.055, className: "mount4"},
        {src: tree, speedX: 0.01, speedY: 0.02, className: "tree"},
        {src: spaceSky, speedX: 0.03, speedY: 0.035, className: "spaceSky"},
        {src: moon, speedX: 0.02, speedY: 0.04, className: "moon"},
        {src: fog1, speedX: 0.035, speedY: 0.035, className: "fog1"},
        {src: fog2, speedX: -0.12, speedY: 0.1, className: "fog2"},
        {src: fog5, speedX: 0.06, speedY: 0.11, className: "fog5"},

    ]
}

export default ImagesData;