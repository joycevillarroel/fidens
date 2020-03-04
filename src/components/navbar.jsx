import React from 'react';

function Navbar () {
    return (
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/sobre">O Colégio <span class="sr-only">(current)</span></a>
      </li>
      
     
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Segmentos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/ensino-infantil">Ensino Infantil</a>
          <a class="dropdown-item" href="/fundamental-I">Fundamental I</a>
          <a class="dropdown-item" href="/fundamental-II">Fundamental II</a>
          <a class="dropdown-item" href="/ensino-medio">Ensino Médio</a>
          <a class="dropdown-item" href="/bilingue">Bilíngue</a>
          <a class="dropdown-item" href="/integral">Integral</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contato">Contato</a>
      </li>
    </ul>
  </div>
</nav>
</div>
    );
}

export default Navbar;