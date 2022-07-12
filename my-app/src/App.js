import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Inicio from "./components/Inicio/inicio";

import Navbar from "./components/Navbar/Navbar";

import Inicio_sesion from "./components/Inicio sesion/inicio-sesion";

import Registrarse from "./components/registrarse/registrarse";

import Compra from "./components/Compra/Compra";

import Venta from "./components/Venta/venta";

import Perfil from "./components/Perfil/perfil";

import AuthRoute from "./components/authRoute";

import DetalleVivienda from "./components/DetalleVivienda/detalleVivienda";

import Guardado from "./components/Guardado/Guardado";

import EditarVivienda from "./components/EditarVivienda/editarVivienda";

function App() {
  return (
    <Router>
      <div>
        <nav></nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/" exact={true}>
            <Navbar />
            <Inicio />
          </Route>

          <Route path="/inicio-sesion" exact={true}>
            <Navbar />
            <Inicio_sesion />
          </Route>

          <Route path="/registrarse" exact={true}>
            <Navbar />
            <Registrarse />
          </Route>

          <Route path="/Navbar">
            <Navbar />

            <Route path="/Navbar/Venta" exact={true}>
              <Venta />
            </Route>

            <Route path="/Navbar/Compra" exact={true}>
              <Compra />
            </Route>


            <AuthRoute path="/Navbar/Perfil" exact={true}>
              <Perfil />
            </AuthRoute>

            <Route path={`/Navbar/:name/:id`} exact={true} >
              <DetalleVivienda />
            </Route>

            <Route path={`/Navbar/editarvivienda/:name/:id`} exact={true} >
              <EditarVivienda />
            </Route>

            <AuthRoute path={`/Navbar/Guardado/:nameuser/:iduser`} exact={true}>
              <Guardado />
            </AuthRoute>

          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
