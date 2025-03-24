import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/LogoSP.png";
import Pfp from "../assets/defaultpfp.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header class="p-3 mb-3 border-bottom text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <img src={Logo} className="bi me-5" width="65" height="65" role="img"/>
        </a>
        

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-white">Exámenes</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Apuntes</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Seguimiento</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Buscar..." aria-label="Search"/>
        </form>

        <div class="dropdown text-end">
          <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={Pfp} alt="mdo" width="32" height="32" class="rounded-circle"/>
          </a>
          <ul class="dropdown-menu text-small">
            <li><a class="dropdown-item" href="#">Perfil</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item text-danger" href="#">Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;