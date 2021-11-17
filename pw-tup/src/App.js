import logo from './logo.svg';
import './App.css';

import pgBa from './img/Barra.png'
import pg1 from './img/1.jpg'
import pg2 from './img/2.jpg'
import pg3 from './img/3.jpg'
import pg4 from './img/4.jpg'
import alq from './img/alquiler.jpg'
import lla from './img/llave.jpg'
import log from './img/Logo1.png'
import mud from './img/Mudanza.jpg'
import p1 from './img/p1.jpg'
import p2 from './img/p2.jpg'
import p3 from './img/p3.jpg'
import p4 from './img/p4.jpg'
import per from './img/perro.jfif'
import pie from './img/pie.png'
import temp from './img/temporal.jpg'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <div>
        <header>
          <div className="contenedor">
            <h1><img src={pgBa} height="58" width="309"/></h1>
              <input type="checkbox" id="menu-bar"/>
              <label className="icon-menu" for="menu-bar"></label>
              <nav className="menu">
                <a href="">Inicio</a>
                <a href="">Registrarse</a>
                <a href="">Compra</a>
                <a href="">Venta</a>
                <a href="">Alquileres Temporarios</a>
                <a href="">Contacto</a>
              </nav>
          </div>
        </header>
    <main>

        <div className="slider">
          <ul>
            <li><img src={pg1} alt=""/></li>
            <li><img src={pg2} alt=""/></li>
            <li><img src={pg3} alt=""/></li>
            <li><img src={pg4} alt=""/></li>
          </ul>
        </div>

        <section id = "texto" className="bloque">
          <h2>Encontrá tu próxima vivienda de forma fácil y rápida, de acuerdo a tus necesidades.</h2>
          <h3>¿Qué estás buscando?</h3>
      </section>


      <div className="all-cards" width="100%;">
        <div>
          <div className="card">
            <img src={lla} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Vender tu propiedad</h5>
                <p className="card-text">
                  Asesoramiento personalizado y tasaciones sin cargo en venta de Inmuebles.
                </p>
                <a href="#" className="btn btn-primary">Ver más</a>
              </div>
          </div>
        </div>

        <div className="card-container-custom">
          <div className="card">
            <img src={temp} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Comprar tu propiedad</h5>
                <p className="card-text">
                  Brindamos soluciones ágiles, entrega inmediata. La casa de tus sueños a solo un click.
                </p>
                <a href="#" className="btn btn-primary">Ver más</a>
              </div>
          </div>
        </div>
        <div className="card-container-custom">
          <div className="card">
            <img src={per} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Alquileres temporarios</h5>
                <p className="card-text">
                  Nuestros locatarios te ofrecen diversos espacios para alquiler por el tiempo que necesites.
                </p>
                <a href="#" className="btn btn-primary">Ver más</a>
              </div>
          </div>
        </div>
        <div className="card-container-custom">
          <div className="card">
            <img src={mud} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Alquileres anuales</h5>
                <p className="card-text">
                  Si buscas una vivienda por más tiempo, aqui vas a encontrar
                  espacios con y sin amoblamiento.
                </p>
                <a href="#" className="btn btn-primary">Ver más</a>
              </div>
          </div>
        </div>

      </div>


      <section id="info">
        <h7> Opiniones de nuestros clientes </h7>
        <div className="contenedor2">
          <div className="info-cli">
            <img src={p1} height="200" width="200"/>
              <h4>Nadia D'angelo</h4>
              <h8> Puse en venta mi casa,<br/>los 3 días tenía un comprador</h8>
          </div>
          <div className="info-cli">
            <img src={p2} height="200" width="200"/>
              <h4>Lara Montiel</h4>
              <h8> Excelente atención<br/>y respuesta ante dudas</h8>
          </div>
          <div className="info-cli">
            <img src={p4} height="200" width="200"/>
              <h4>Federico Muñoz</h4>
              <h8> Discreción a la <br/>hora de alquilar </h8>
          </div>
          <div className="info-cli">
            <img src={p3} height="200" width="200"/>
              <h4>Juan Ortiz</h4>
              <h8> Confort y seguridad<br/>recomendable familias</h8>
          </div>
        </div>
      </section>

      <div className="pie">
        <img src={pie} height="265" width="100%"/>
      </div>

    </main>

</div>
  
  );
}

export default App;
