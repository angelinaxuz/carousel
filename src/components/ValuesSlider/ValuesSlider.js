import React, {useState} from 'react'

import ImageSlider from "./components/ImageSlider/ImageSlider";
import TextSlider from "./components/TextSlider/TextSlider";

export default function ValuesSlider() {
    const [imageSlickSlider, setImageSlickSlider] = useState(null)
    function next() {
        imageSlickSlider.slickNext()
    }

    function prev() {
        imageSlickSlider.slickPrev()
    }
    return (
        <div>

            <ImageSlider setImageSlider={setImageSlickSlider}/>
            <TextSlider prev={prev} next={next}/>
        </div>
    )
}

