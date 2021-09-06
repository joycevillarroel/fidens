import React from 'react';
import inf from '../../images/EcossistemaAnglo_Outdoor5.jpg'
import fund1 from '../../images/EcossistemaAnglo_Outdoor3.jpg'
import fund2 from '../../images/EcossistemaAnglo_Outdoor4.jpg'
import medio from '../../images/EcossistemaAnglo_Outdoor2.jpg'
import Carousel from 'react-bootstrap/Carousel';
import style from './style.module.css'


const Segments = () => {
  return (
    <div className={style.container} >
      <Carousel>
        <Carousel.Item>
          <a href="/infantil" >
            <img
              className="d-block w-100"
              src={inf}
              alt="First slide"
            />
          </a>
          <Carousel.Caption className={style.edu}>
            <h3>Educação Infantil</h3>
            <a href="/infantil">Saiba mais</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/fundamental" >
            <img
              className="d-block w-100"
              src={fund1}
              alt="Third slide"
            />
          </a>
          <Carousel.Caption className={style.edu}>
            <h3>Ensino Fundamental I</h3>
            <a href="/fundamentalI">Saiba mais</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/medio" >
            <img
              className="d-block w-100"
              src={fund2}
              alt="Third slide"
            />
          </a>
          <Carousel.Caption className={style.edu}>
            <h3>Ensino Fundamental II</h3>
            <a href="/fundamentalII">Saiba mais</a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/medio" >
            <img
              className="d-block w-100"
              src={medio}
              alt="Third slide"
            />
          </a>
          <Carousel.Caption className={style.edu}>
            <h3>Ensino Médio</h3>
            <a href="/medio">Saiba mais</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Segments;