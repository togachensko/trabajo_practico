import logo from './logo.svg';
import './App.css';
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
            <h1><img src="img/Barra.png" height="58" width="309"/></h1>
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
        <section id="banner">
        <img src="img/banner_1.jpg" alt=""/>
          <div className="contenedor">
            <h2>Alquileres Directos - Sin intermediarios</h2>
            <p>Seriedad, trayectoria y confianza</p>
          </div>
      </section>

        <div className="slider">
          <ul>
            <li><img src="img/1.jpg" alt=""/></li>
            <li><img src="img/2.jpg" alt=""/></li>
            <li><img src="img/3.jpg" alt=""/></li>
            <li><img src="img/4.jpg" alt=""/></li>
          </ul>
        </div>

        <section id = "texto" className="bloque">
          <h2>Encontrá tu próxima vivienda de forma fácil y rápida, de acuerdo a tus necesidades.</h2>
          <h3>¿Qué estás buscando?</h3>
      </section>


      <div className="all-cards" width="100%;">
        <div>
          <div className="card">
            <img src="img/llave.jpg" className="card-img-top" alt="..."/>
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
            <img src="img/temporal.jpg" className="card-img-top" alt="..."/>
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
            <img src="img/perro.jfif" className="card-img-top" alt="..."/>
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
            <img src="img/Mudanza.jpg" className="card-img-top" alt="..."/>
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
            <img src="img/p1.jpg" height="200" width="200"/>
              <h4>Nadia D'angelo</h4>
              <h8> Puse en venta mi casa,+ "\n" + a los 3 días tenía un comprador</h8>
          </div>
          <div className="info-cli">
            <img src="img/p2.jpg" height="200" width="200"/>
              <h4>Lara Montiel</h4>
              <h8> Excelente atención + "\n" + y respuesta ante dudas</h8>
          </div>
          <div className="info-cli">
            <img src="img/p4.jpg" height="200" width="200"/>
              <h4>Federico Muñoz</h4>
              <h8> Discreción a la + "\n" + hora de alquilar </h8>
          </div>
          <div className="info-cli">
            <img src="img/p3.jpg" height="200" width="200"/>
              <h4>Juan Ortiz</h4>
              <h8> Confort y seguridad + "\n" + recomendable familias</h8>
          </div>
        </div>
      </section>

      <div className="pie">
        <img src="img/pie.png" height="265" width="100%"/>
      </div>

    </main>

</div>
  
  );
}

export default App;
