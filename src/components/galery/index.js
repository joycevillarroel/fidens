import React from 'react';
import style from './style.module.css'
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import p01 from '../../images/fotos/01.jpeg'
import p02 from '../../images/fotos/02.jpeg'
import p03 from '../../images/fotos/03.jpeg'
import p04 from '../../images/fotos/04.jpeg'
import p05 from '../../images/fotos/05.jpeg'
import p06 from '../../images/fotos/06.jpeg'
import p07 from '../../images/fotos/07.jpeg'
import p08 from '../../images/fotos/08.jpeg'
import p09 from '../../images/fotos/09.jpeg'
import p10 from '../../images/fotos/10.jpeg'
import p11 from '../../images/fotos/11.jpeg'
import p12 from '../../images/fotos/12.jpeg'
import p13 from '../../images/fotos/13.jpeg'
import p14 from '../../images/fotos/14.jpeg'
import p15 from '../../images/fotos/15.jpeg'


const Gallery = () => {

    const pictures = [p01, p02, p03, p04, p05, p06, p07, p08, p09, p10, p11, p12, p13, p14, p15];
    
    return (
        <div>
            <Navbar/>
            <h1>Galeria de Fotos</h1>
            <div className={style.picturesContainer}>
              {
                  pictures.map(pic => 
                    <img src={pic} alt="pátio"/>
                    )
                } 
                
            </div>
            <Footer/>
        </div>
    )
}

export default Gallery;