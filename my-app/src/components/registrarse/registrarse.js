import "./registrarse.css";
import { useState } from "react";
import { httpPost } from "../../utils/httpFunctions";
import { useHistory } from "react-router-dom";

  

const Registrarse = () => {
  const [username, setUsername] = useState([]);
  const [first_name, setFirst_name] = useState([]);
  const [last_name, setLast_name] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault();
    httpPost("api/register/", {
      username: username,
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    }).then(
      history.push('/inicio-sesion')
    );
  };

  return (
    <div className="login-screen">
      <form className="form" onSubmit={signUp}>
        <h2>Registrarse</h2>
        <div className="container">
          <div className="input-contenedor">
            <i className="fas fa-user"/>
            <input
              className="input-login"
              type="text"
              name="user"
              placeholder="Nombre de Usuario"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-contenedor">
            <i className="fas fa-user"/>
            <input
              className="input-login "
              type="text"
              name="user"
              placeholder="Nombre"
              required
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </div>
          <div className="input-contenedor">
            <i className="fas fa-user"/>
            <input
              className="input-login"
              type="text"
              name="user"
              placeholder="Apellido"
              required
              onChange={(e) => setLast_name(e.target.value)}
            />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-envelope"/>
            <input
              className="input-login"
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-contenedor">
            <i className="fas fa-lock"/>
            <input
              className="input-login"
              type="password"
              name="password"
              placeholder="Contraseña"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
            <button type="submit" className="inicio-btn">Registrarse</button>
          <p>
            <input className="checkbox" type="checkbox" required />
            Acepto los <a href="#">Términos y Condiciones</a> y autorizo el uso
            de mis datos de acuerdo a la{" "}
            <a href="#">Declaración de Privacidad.</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Registrarse;
