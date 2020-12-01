import React from  'react';
import image from '../../images/bannerOficial.jpg'
import style from './style.module.css'

const Banner = () => {
    return (
        <div className={style.container}>
            <img src={image} className={style.img} alt="banner" />
        </div>
    )
}

export default Banner;