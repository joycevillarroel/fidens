import React, { useState } from  'react';
import style from './style.module.css'

const About = () => {
    const [mail, setMail] = useState('')

    const handleChange = value => {
        setMail(value)
    }

    const enviar = `mailto:${mail}`
    // const enviar = "mailto:larry,dan?cc=mike&bcc=sue&subject=test&body=type+your&body=message+here"
    return ( 
        <div className={style.container} id="about">
            <h1>Sobre o Colégio Fidens</h1>
            <div className={style.videoContainer}>
            <div>
            <iframe title="anglo" id="ytplayer" type="text/html" className={style.video} src='http://www.youtube.com/embed/P8GwOO4bY3k' frameBorder="0"/>
            </div>
            <div className={style.textContainer}>
            <p>O Fidens, é um colégio movido pelo PROTAGONISMO na educação, queremos apresentar a vocês um colégio conectado com a nova geração, estimulante, que eleva o aprender e o ensinar a um novo patamar.</p>
            <p>Vem com a gente!!!</p>
            <p>“A educação do futuro acontecendo hoje, preparando os alunos para os desafios da vida e do mercado de trabalho no Século XXI."</p>
            </div>
            </div>

        <form action={enviar} >
            <input onChange={e => handleChange(e.target.value)} placeholder="Digite o mail de destino"></input>
            <button>enviar</button>
        </form>
        </div>
    )
}

export default About;