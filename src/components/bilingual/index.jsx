import React from 'react';
import style from './style.module.css';
import logoBilinguel from '../../images/logoBiligual.png'

const Bilingual = () => {
    return (
        <div className={style.container}>
            <h1>Bilíngue de Verdade</h1>
            <div className={style.videoContainer}>
            <div className={style.teste}>
            <img src={logoBilinguel} alt="logo Bilingual"></img>
            <div className={style.textContainer}>
            <p>
            O programa bilíngue High Five Bilingual School propõe uma vivência em inglês, visando a aquisição natural do idioma de forma imersiva e diária, prezando pela experiência positiva dos cinco protagonistas: aluno, família, professores, gestores e mantenedores.
            </p>
            <a href="https://cloeedu.com.br/">Saiba mais</a>
            </div>
            </div>
            <div>
            <iframe title="bilingual" id="ytplayer" type="text/html" className={style.video} src='http://www.youtube.com/embed/HUBKrGFxyi4' frameBorder="0" />
            </div>
            </div>


            
        </div>
    )
}

export default Bilingual;