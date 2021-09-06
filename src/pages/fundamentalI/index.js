import React from  'react';
import style from './style.module.css'

const Fundamental = () => {
    return (
        <div className={style.container} >
            <h1>Sobre o Colégio</h1>
            <div className={style.videoContainer}>
            <div>
            </div>
            <div className={style.textContainer}>
            <h4>Colégio Fidens Anglo</h4>
            <p>Um grande diferencial do Anglo é saber ouvir os pais e encontrar soluções criativas envolvendo a família e a escola e assim aprendermos mais e melhor, juntos, construindo uma história de sucesso a cada dia. Outro ponto importante é a qualidade dos nossos serviços educacionais e nosso sistema de ensino que cria no aluno o hábito de estudo dentro e fora da sala de aula.</p>
            <p>* Pronta para o futuro</p>
            <p>* Ensino de qualidade</p>
            <p>* Sistema Anglo</p>
            </div>
            </div>
        </div>
    )
}

export default Fundamental;