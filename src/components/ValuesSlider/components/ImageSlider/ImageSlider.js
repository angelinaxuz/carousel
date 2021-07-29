import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './styles.module.scss'
import img1 from 'img/slider1.jpg'
import img2 from 'img/slider2.jpg'
import img3 from 'img/slider3.jpg'

export default function ImageSlider({imageSliderRef}) {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Slider {...settings} ref={imageSliderRef}>
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
        </>
    )

}


