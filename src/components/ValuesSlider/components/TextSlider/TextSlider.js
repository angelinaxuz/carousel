import React, {useCallback, useEffect, useRef, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {chunk} from 'lodash-es'
import classNames from "classnames";

import styles from './styles.module.scss'
import Container from "components/Container/Container";

export default function TextSlider({prev, next}) {
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

    // (function () {
    //     var throttle = function (type, name, obj) {
    //         obj = obj || window;
    //         var running = false;
    //         var func = function () {
    //             if (running) {
    //                 return;
    //             }
    //             running = true;
    //             requestAnimationFrame(function () {
    //                 obj.dispatchEvent(new CustomEvent(name));
    //                 running = false;
    //             });
    //         };
    //         obj.addEventListener(type, func);
    //     };
    //
    //     /* init - you can init any event */
    //     throttle("resize", "optimizedResize");
    // })();


    useEffect(() => {

        window.addEventListener("resize", function () {
            if (document.documentElement.clientWidth > 1000) {
                setSize(3)
            } else {
                setSize(2)
            }
        });

    }, [])


    const settings = {
        fade: true,
        speed: 500,
        arrows: false,
    };
    const slider = useRef(null)

    const toPrev = useCallback(() => {
        slider.current.slickPrev()
        prev()
    }, [prev, slider])

    const toNext = useCallback(() => {
        slider.current.slickNext()
        next()
    }, [next, slider])


    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={classNames(styles.slidePrev, styles.slideArrow)} onClick={toPrev}/>
                <div className={classNames(styles.slideNext, styles.slideArrow)} onClick={toNext}/>
                <div className={styles.title}>Our values:</div>
                <Slider className={styles.slider} {...settings} ref={slider}>
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
    )
}

