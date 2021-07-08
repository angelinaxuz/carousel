import React, {useRef, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const settings = {
        fade: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    const [slider, setSlider] = useState(null)


    function myNext() {
        slider.slickNext()
        next()
    }

    function myPrev() {
        slider.slickPrev()
        prev()
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={myPrev}>Prev</button>
            <button onClick={myNext}>Next</button>
            <Container>
                <div className={`${styles.slidePrev} ${styles.slideArrow}`}/>
                <div className={`${styles.slideNext} ${styles.slideArrow}`}/>
                <div className={styles.title}>Our values:</div>
                <Slider className={styles.slider} {...settings} ref={c => setSlider(c)}>
                    {items.map(({id, text}) => (
                        <div>
                            <div className={styles.textItem} key={id}>
                                <span>{id}</span>
                                {text}
                            </div>
                            </div>
                        )
                    )}
                </Slider>
            </Container>
        </div>
    )
}

