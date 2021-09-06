import React from 'react';
import style from './style.module.css'
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const Childish = () => {
    return (
        <div className={style.container} >
            <Navbar />
            <div className={style.videoContainer}>
                <div>
                </div>
                <div className={style.textContainer}>
                    <h4>Sobre a Educação Infantil e Ensino Fundamental I</h4>
                    <h6>Proposta de Ensino:</h6>
                    <p>A melhor maneira de descobrir o mundo é por meio das nossas próprias experiências. Dessa forma, as crianças aprendem diversos assuntos com diferentes pontos de vista, desenvolvendo seu senso crítico, sempre com a ajuda do nosso material didático;</p>

                    <h6>Nossa Maneira de Ensinar:</h6>
                    <p>Focada no desenvolvimento das crianças e em um educação com metodologia ativa, desenvolvemos uma metodologia diferente, para que nossos alunos aprendem desde pequenos as habilidades que são essenciais para um grande profissional do futuro. Tudo isso de de uma maneira bem divertida e intuitiva.</p>

                    <h6>A Turma do Luan:</h6>
                    <p>Uma série de personagens que ajudam em sala de aula e crescem junto com os alunos ao passar dos anos. Situações do dia a dia das crianças para apoiar o conteúdo aplicado em sala de aula;</p>

                    <h6>Programa Bilíngue:</h6>
                    <p>Diariamente, as teachers direcionam nossos pequenos à aprendizagem do vocabulário da língua inglesa, de maneira cotidiana, prática, lúdica e natural. A segunda língua torna-se algo simples e prazeroso, que é aprendido de maneira natural como se fosse a língua materna!</p>

                    <h6>Estrutura:</h6>
                    <p>Para os momentos de diversão, contamos com parquinho coberto, ginásio esportivo e pátio para os momentos de ludicidade, brincadeiras direcionadas e cozinha experimental.</p>
                    <p>Nossas salas de aula são equipadas com ar condicionado, banheiro interno, multimídia, tapetes emborrachados. Um ambiente propício ao trabalho em grupo e socialização.</p>

                    <p>Nosso principal objetivo com a educação infantil, é desenvolver crianças felizes, protagonistas do seu próprio aprendizado, conscientes de seu papel transformador na sociedade.</p>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Childish;