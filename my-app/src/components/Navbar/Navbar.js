import { Link } from "react-router-dom";
import './Navbar.css';
import logo from "../images/Logo1.png";
import { useEffect, useState } from "react";
import { httpGetAuthorization } from "../../utils/httpFunctions";



const Navbar = () => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    httpGetAuthorization('api/me').then((res) => setUserData(res.data))
  }, [])

  return (

    <div>
      <nav class="navbar sticky-top navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand">
            <a className="navbar-brand logo" href="#homepage"><img src={logo} width="50" alt=""/></a>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/">
                  <a class="nav-link" aria-current="page">
                    Inicio
                  </a>
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul class="dropdown-menu bg-white" aria-labelledby="navbarDropdown">
                  <Link to="/NavBar/Venta">
                    <li>
                      <a class="dropdown-item">
                        Venta
                      </a>
                    </li>
                  </Link>
                  <Link to="/NavBar/Compra">

                    <li>
                      <a class="dropdown-item" >
                        Compra
                      </a>
                    </li>
                  </Link>

                </ul>
              </li>
              <li className="nav-item">
                <Link to="/registrarse">
                  <a className="nav-link">
                    Registrarse
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/inicio-sesion">

                  <a class="nav-link" >
                    Iniciar sesión
                  </a>
                </Link>
              </li>



              <li class="nav-item">
                <Link to="/Navbar/Perfil">
                  <a class="nav-link" aria-current="page">
                    Mi Perfil
                  </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to={`/Navbar/Guardado/${userData.username}/${userData.id}`}>
                  <a class="nav-link" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                  </svg> Propiedades Guardadas
                  </a>
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
