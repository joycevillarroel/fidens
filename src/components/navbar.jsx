import React from 'react';
import './navbar.scss'


function Navbar () {
    return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">
    <img className="logo mr-3" src="/images/logo.jpg" alt="logo fidens"/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/sobre">O Colégio <span className="sr-only">(current)</span></a>
      </li>
      
     
      <li className="seg nav-item active">
      <a className="nav-link" href="/">Segmentos</a>

        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/ensino-infantil">Ensino Infantil</a>
          <a className="dropdown-item" href="/fundamental-I">Fundamental I</a>
          <a className="dropdown-item" href="/fundamental-II">Fundamental II</a>
          <a className="dropdown-item" href="/ensino-medio">Ensino Médio</a>
          <a className="dropdown-item" href="/bilingue">Bilíngue</a>
          <a className="dropdown-item" href="/integral">Integral</a>
        </div>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/contato">Contato</a>
      </li>
    </ul>
  </div>
</nav>
</div>
    );
}

export default Navbar;