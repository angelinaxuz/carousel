import React, {useCallback, useRef} from 'react'

import ImageSlider from "./components/ImageSlider/ImageSlider";
import TextSlider from "./components/TextSlider/TextSlider";

export default function ValuesSlider() {

    const imageSlickSlider = useRef(null)

    const next = useCallback(() => {
        imageSlickSlider.current.slickNext()
    }, [imageSlickSlider])

    const prev = useCallback(() => {
        imageSlickSlider.current.slickPrev()
    }, [imageSlickSlider])

    return (
        <div>

            <ImageSlider imageSliderRef={imageSlickSlider}/>
            <TextSlider prev={prev} next={next}/>
        </div>
    )
}

