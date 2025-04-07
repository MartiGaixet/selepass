import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/LogoSP.png";
import Pfp from "../assets/defaultpfp.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  // Estado para mostrar la pestaña lateral
  const [showSidebar, setShowSidebar] = useState(false);

  // Funciones de navegación
  const goAsignatura = () => {
    navigate("/Asignatura");
  };

  const goLogin = () => {
    navigate("/Login");
  };

  const goPerfil = () => {
    navigate("/Perfil");
  };

  return (
    <header className="p-3 border-bottom text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <img src={Logo} className="bi me-5" width="65" height="65" role="img"/>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li 
              className="nav-item"
              onMouseEnter={() => setShowSidebar(true)} // Al hacer hover, mostramos la barra lateral
              onMouseLeave={() => setShowSidebar(false)} // Al salir del hover, ocultamos la barra lateral
            >
              <a className="nav-link px-2 text-white" onClick={goAsignatura}>Exámenes</a>
            </li>
            <li 
              className="nav-item"
              onMouseEnter={() => setShowSidebar(true)} // Lo mismo para "Apuntes"
              onMouseLeave={() => setShowSidebar(false)}
            >
              <a className="nav-link px-2 text-white">Apuntes</a>
            </li>
            <li><a className="nav-link px-2 text-white">Seguimiento</a></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Buscar..." aria-label="Search"/>
          </form>

          <div className="dropdown text-end">
            <a className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={Pfp} alt="mdo" width="32" height="32" className="rounded-circle"/>
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" onClick={goPerfil}>Perfil</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item text-danger" onClick={goLogin}>Cerrar sesión</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pestaña lateral */}
      {showSidebar && <div className="sidebar"></div>}
    </header>
  );
};

export default Header;
