  
import React from 'react';
import style from './style.module.css';
import 'bootstrap-social';
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'

const Contact = () => (
  <div id="contact" className={style.containerFluid}>
    <div className={style.container}>
      <div className={style.info}>
        <h4>CONTATO</h4>
        <p>Telefones:</p>
        <p>(11) 4667-3335</p>
        <p>(11) 4165-1988</p>
        <p>E-mail: fidenssecretaria@hotmail.com</p>
        <p>Rua Luar do Sertão, 1713<br/>Chácara Santa Maria<br /> Itapecerica da Serra - SP<br/>CEP: 05879-450</p>
      </div>
      <div className={style.social}>
        <h4>SIGA-NOS</h4>
        <a href='https://www.facebook.com/FidensAnglo'><img className="img-fluid btn-social-icon btn-facebook p-1 m-1" src={facebook} alt="facebook" /></a>
        <a href='https://www.instagram.com/colegiofidens_anglo/?hl=pt-br' ><img className="img-fluid btn-social-icon btn-instagram p-1 m-1" src={instagram} alt="instagram" /></a>
      </div>
      <div className={style.map}>
      <iframe className={style.homeMap} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14614.30595564444!2d-46.800330190490726!3d-23.691098805475566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6bdcbad1195a976b!2sCol%C3%A9gio%20Fidens!5e0!3m2!1spt-BR!2sbr!4v1606836366473!5m2!1spt-BR!2sbr" frameBorder="0" border={"0"} allowfullscreen></iframe>
      </div>
    </div>
  </div>
);

export default Contact;