import { Link } from "react-router-dom";
import fondo from "./images/60032.jpg";

function SubjectCards({ subject }) {
  return (
    //   <!--///////////////////////////////// -->
    // <!--//CARDS ALGUNOS PRODUCTOS////////-->
    // <!--/////////////////////////////// -->

    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#55595c" />
        </svg>

        <div className="card-body">
          <img src={fondo} className="card-img-top" width="100%"/>
          <h5 className="card-text">{subject.name}</h5>
          <p className="card-text">
            Descripción: {subject.description}
          </p>
          <p className="card-text">
            Precio: {subject.price}
          </p>
          <p>Codigo: {subject.id}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/Navbar/${subject.name}/${subject.id}`}><button className="btn btn-primary p-3">
                Ver Detalles
              </button></Link>
            </div>
            {/* <!-- <small class="text-muted">9 mins</small> --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectCards;
