import React from  'react';
import inf from '../../images/edInfantil.jpg'
import fund1 from '../../images/fund1.jpg'
import fund2 from '../../images/fund2.jpeg'
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
    <Carousel.Caption>
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
    <Carousel.Caption>
      <h3>Ensino Fundamental</h3>
      <a href="/fundamental">Saiba mais</a>
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
    <Carousel.Caption>
      <h3>Ensino Médio</h3>
      <a href="/medio">Saiba mais</a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}

export default Segments;