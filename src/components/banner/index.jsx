import React from  'react';
import image from '../../images/bannerOficial.jpg'
import style from './style.module.css'

const Banner = () => {
    return (
        <div>
            <img src={image} className={style.img} />
        </div>
    )
}

export default Banner;