import React from  'react';
import style from './style.module.css'

const About = () => {

    return ( 
        <div className={style.container} id="about">
            <h3>Sobre o Colégio Fidens</h3>
            <div className={style.videoContainer}>
            <div>
            <iframe title="anglo" id="ytplayer" type="text/html" className={style.video} src='http://www.youtube.com/embed/P8GwOO4bY3k' frameBorder="0"/>
            </div>
            <div className={style.textContainer}>
            <p>O Fidens, é um colégio movido pelo PROTAGONISMO na educação, queremos apresentar a vocês um colégio conectado com a nova geração, estimulante, que eleva o aprender e o ensinar a um novo patamar.</p>
            <h4>Vem com a gente!!!</h4>
            <br/>
            <p>“A educação do futuro acontecendo hoje, preparando os alunos para os desafios da vida e do mercado de trabalho no Século XXI."</p>
            </div>
            </div>

        </div>
    )
}

export default About;