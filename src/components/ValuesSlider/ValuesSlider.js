import React, {useCallback, useEffect, useRef, useState} from 'react'
import img1 from "../../img/slider1.jpg";
import img2 from "../../img/slider2.jpg";
import img3 from "../../img/slider3.jpg";
import Slider from "react-slick";
import {chunk} from "lodash-es";
import Container from "../Container/Container";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styles from './styles.module.scss'


export default function ValuesSlider() {

    const [isActivePrevBtn, setIsActivePrevBtn] = useState(false)
    const [isActiveNextBtn, setIsActiveNextBtn] = useState(true)

    const imageSliderRef = useRef(null)
    const textSliderRef = useRef(null)
    debugger

    const imageSliderSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        onSwipe: (direction) => {
            if (direction === "left") {
                textSliderRef.current.slickNext()
            }else {
                textSliderRef.current.slickPrev()
            }
        },
        beforeChange: (currentIndex, nextIndex) => {
            if (nextIndex === 0) {
                setIsActivePrevBtn(false)
            }else {
                setIsActivePrevBtn(true)
            }
            if (nextIndex === fadeItems.length - 1) {
                setIsActiveNextBtn(false)
            }else {
                setIsActiveNextBtn(true)
            }
        }

    };

    const items = [
        {
            id: 1,
            text: 'Responsibility for our words and actions. We are always ready to provide support at critical times'
        },
        {
            id: 2,
            text: 'Honesty. We are not afraid to admit our guilt, correct our mistakes and draw the right conclusions'
        },
        {
            id: 3,
            text: 'It is benevolence, positivity, friendliness. We are open to dialogue, know how to listen and interact with others.'
        },
        {
            id: 4,
            text: 'We take care of the end result, analyze options for solutions and choose or offer the best one in a particular situation'
        },
        {
            id: 5,
            text: 'We value the personal reputation and reputation of the company'
        },
        {
            id: 6,
            text: 'We are professionals in our field who love our work and enjoy it'
        },
        {
            id: 7,
            text: 'We are not afraid do not know something, but we love to learn, improve ourselves and grow.'
        },
        {
            id: 8,
            text: 'We respect the established rules and procedures.'
        }
    ]


    let [size, setSize] = useState(3)
    const fadeItems = chunk(items, size)


    useEffect(() => {

        window.addEventListener("resize", function () {
            if (document.documentElement.clientWidth > 1000) {
                setSize(3)
            } else {
                setSize(2)
            }
        });



    }, [])


    const textSliderSettings = {
        fade: true,
        infinite: false,
        speed: 500,
        arrows: false,
    };

    const toPrev = useCallback(() => {
        textSliderRef.current.slickPrev()
        imageSliderRef.current.slickPrev()
    }, [textSliderRef, imageSliderRef])

    const toNext = useCallback(() => {
        textSliderRef.current.slickNext()
        imageSliderRef.current.slickNext()

    }, [textSliderRef, imageSliderRef])



    return (
        <div>
            <Slider {...imageSliderSettings} ref={imageSliderRef}>
                <div>
                    <div className={styles.imageSlider} style={{backgroundImage: `url(${img1})`}}/>
                </div>
                <div>
                    <div className={styles.imageSlider} style={{backgroundImage: `url(${img2})`}}/>
                </div>
                <div>
                    <div className={styles.imageSlider} style={{backgroundImage: `url(${img3})`}}/>
                </div>
            </Slider>
            <div className={styles.wrapper}>
                <Container>
                    <div className={classNames(styles.slidePrev, styles.slideArrow, {[styles.active]:isActivePrevBtn})} onClick={toPrev}/>
                    <div className={classNames(styles.slideNext, styles.slideArrow, {[styles.active]:isActiveNextBtn})} onClick={toNext}/>
                    <div className={styles.title}>Our values:</div>
                    <Slider className={styles.slider} {...textSliderSettings} ref={textSliderRef}>
                        {fadeItems.map((items, idx) => {
                                let itemClassNames = classNames(
                                    styles.sliderInner,
                                    {[styles.sliderInnerLast]: idx === fadeItems.length - 1}
                                )
                                return (
                                    <div key={idx}>
                                        <div className={itemClassNames}>
                                            {
                                                items.map(
                                                    ({id, text}) => (
                                                        <div className={styles.textItem} key={id}>
                                                            <span>{id}</span>
                                                            {text}
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </Slider>
                </Container>
            </div>
        </div>
    )
}

