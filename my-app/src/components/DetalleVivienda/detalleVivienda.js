import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { httpGetAuthorization, httpGet, httpPostAuthorization } from '../../utils/httpFunctions'
import "./DetalleVivienda.css";

import { Link } from 'react-router-dom';

const DetalleVivienda = () => {
  const [products, setProducts] = useState([])
  const [Vendedor, setvendedor] = useState([])
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState([])
  const [filterComments] = useState(true)
  const [userData, setUserData] = useState({})
  const [numberProduct, setNumberProduct] = useState(0)


  const { id } = useParams()

  const idProduct = id

  const fetchProducts = () => {
    httpGet(`api/product/${id}`)
      .then((res) => setProducts(res.data))
  }

  const fetchvendedor = () => {
    httpGet(`api/product/${id}`)
      .then((res) => setvendedor(res.data.usuario))
  }



  useEffect(() => {
    httpGetAuthorization('api/me').then((res) => setUserData(res.data))
  }, [])




  const createVivienda = (e) => {
    e.preventDefault()
    httpPostAuthorization('api/CartItemViewSet/', { Product: id, "usuario": userData.id })
      .then(window.alert("Su vivienda se guardo correctamente"))
  }



  useEffect(fetchProducts, [])

  useEffect(fetchvendedor, [])



  return (
    <div>
      <div class="container-fluid">
        <div class="container  bg-white mt-5 mb-5 shadow-lg p-3 rounded p-5 ">
          <div class="caja mt-3">
            <div class="row ">
              <div class="col-8 d-flex container_detalles">
                <div class="col-6  mb-4">
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="400" xmlns="http://www.w3.org/2000/svg"
                    role="img" preserveAspectRatio="xMidYMid slice" focusable="false">
                    <rect width="100%" height="100%" fill="#55595c" />
                  </svg>
                  <div class="row ">
                    <div class="col-12 ">
                      <h5>Características:</h5>
                      <p className="text-start">{products.features}</p>
                    </div>

                  </div>
                </div>
                <div class="col-5 offset-1">
                  <h2>{products.name}</h2>
            


                  <h5 class="mt-4">Descripción:</h5>
                  <p class="text-description text-start">{products.description}</p>
                </div>

              </div>


              <div class="col-3 offset-1 compra ">
                <h5 class="mb-0 text-primary text-start">Vitaco Propiedades</h5>
                <h6 className="text-start">Santiago 938 - Rosario</h6>
                <p className="text-start">Contacto: 3417983456</p>
                <p className="mt-4 text-start">Vendido por {Vendedor.username}</p>
                <button type="button" class="btn comprar btn-lg btn-block mt-3 w-100">Contactar</button>

                <form onSubmit={createVivienda}>
                  <button type="submit" class="btn agregar btn-lg btn-block mt-2 w-100"
                    onClick={() => setNumberProduct(numberProduct + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">

                    </svg> Guardar Vivienda </button>
                </form>

                <Link to={`/Navbar/guardado/${userData.username}/${userData.id}`}><button type="button" class="btn agregar btn-lg btn-block mt-2 w-100"> <svg xmlns="" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">

                </svg> Ver Guardados </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalleVivienda