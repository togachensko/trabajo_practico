import lla from "../images/llave.jpg"
import temp from "../images/temporal.jpg";
import per from "../images/60032.jpg";
import mud from "../images/Mudanza.jpg";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p4 from "../images/p4.jpg";
import p3 from "../images/p3.jpg";
import pgBa from "../images/Barra.png";
import pg1 from "../images/1.jpg";
import pg2 from "../images/2.jpg";
import pg3 from "../images/3.jpg";
import pg4 from "../images/4.jpg";
import pie from "../images/pie.png";
import './Inicio.css';
import {useEffect} from "react";



const Inicio = () => {

  const subjects = [
    {name: 'Vender tu propiedad', desciption: 'Tasaciones sin cargo en venta de Inmuebles', imagen: lla},
    {name: 'Comprar tu propiedad' , desciption: 'Brindamos soluciones, entrega inmediata.', imagen: temp},
    {name: 'Consulta tus favoritos' , desciption: 'No pierdas de vista la casa de tus sueños. ', imagen:per},
    {name: 'Registrate y comenza a disfrutar' , desciption: 'Dejanos tus datos, nos contactaremos', imagen: mud}]

  const clientes = [
    {name: 'Nadia D\'angelo', desciption: 'Puse en venta mi casa,\n' + 'a los 3 días tenía un comprador', imagen: p1},
    {name: 'Lara Montiel' , desciption: 'Excelente atención\n' + 'y respuesta ante dudas', imagen: p2},
    {name: 'Federico Muñoz' , desciption: 'Discreción y confidencialidad', imagen:p4},
    {name: 'Cardozo Carlos' , desciption: 'Confort y seguridad\n' + 'recomendable familias', imagen: p3}
      ]


  return (
      <div >

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


          <div className="all-cards" >{
            subjects.map ((subject) =>


                <div className="card-container-custom">
                  <div className="card ">
                    <img src={subject.imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{subject.name}</h5>
                      <p className="card-text">{subject.desciption}</p>
                      <a href="/NavBar/Venta" className="btn btn-primary">Ver más</a>
                    </div>
                  </div>
                </div>
            )

          }
          </div>



          <section id="info">
            <h7> Opiniones de nuestros clientes </h7>


            <div className="contenedor2">{
              clientes.map ((subject) => {
                return(
                    <div className="info-cli">
                      <img src={subject.imagen} height="200" width="200"/>
                      <h4>{subject.name}</h4>
                      <h8>{subject.desciption}</h8>
                    </div>
                )
              })

            }
            </div>
          </section>

          <div className="pie">
            <img src={pie} height="265" width="100%"/>
          </div>

        </main>

      </div>
  );
}
export default Inicio;