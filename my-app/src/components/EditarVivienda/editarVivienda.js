import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { httpGet, httpPutAuthorization, httpGetAuthorization } from '../../utils/httpFunctions'
import { useHistory } from "react-router-dom";



const EditarVivienda = () => {
    const [products, setProducts] = useState([])
    const [idProduct, setIdProduct] = useState(null)
    const [name, setName] = useState([])
    const [category, setCategory] = useState([])
    const [description, setDescription] = useState([])
    const [price, setPrice] = useState([])
    const [features, setFeatures] = useState([])
    const [offerPercentage, setOfferPercentage] = useState([])
    const [userData, setUserData] = useState({})
    
    const history = useHistory();

    const { id } = useParams()
    
    const fetchProducts = () => {
    httpGet(`api/product/${id}`)
      .then((res) => setProducts(res.data))
  }
  
  useEffect(fetchProducts, [])

  useEffect(() => {
    httpGetAuthorization('api/me').then((res) => setUserData(res.data))
  }, [])


  let finalIdProduct = products.id

  const editProduct = (e) => {
    e.preventDefault()
    httpPutAuthorization(`api/product/${finalIdProduct}/`, { name: name, category: category, description: description, price: price, features: features, offerPercentage: offerPercentage,
    usuario: userData.id })
      .then(
        history.push('/Navbar/Perfil')
      )
  }
  return (
      <div>
    <form className="col-md-8 offset-md-2 bg-white shadow p-3 mb-5 bg-white rounded" onSubmit={editProduct}>
    <div className="row mt-5 mb-4 ">

      <div className="col-10 offset-1">
      <div className="form-group row mb-4">
            <div className="col-8">
            <input type="hidden" value={idProduct} onChange={(e) => setIdProduct(e.target.value)}/>
            </div>
            </div>
        <div className="form-group row mb-4">
          <label for="codigo" className="col-4 col-md-3"> Nombre:</label>
          <div className="col-8">
            <input type="text" className="form-control border border-secondary" value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label for="codigo" className="col-4 col-md-3 "> Categoría:</label>
          <div className="col-8">
            <input type="text" className="form-control border border-secondary" value={category}
              onChange={(e) => setCategory(e.target.value)} />
          </div>
        </div>

        <div className="form-group row mb-4">
          <label for="codigo" className="col-4 col-md-3"> Descripción:</label>
          <div className="col-8">
            <textarea type="text" className="form-control border border-secondary" value={description}
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
        </div>

        <div className="form-group row mb-4">
          <label for="codigo" className="col-4 col-md-3"> Precio:</label>
          <div className="col-8">
            <input type="text" className="form-control border border-secondary" value={price}
              onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>

        <div className="form-group row mb-4">
          <label for="codigo" className="col-4 col-md-3"> Características:</label>
          <div className="col-8">
            <textarea type="text" className="form-control border border-secondary" value={features}
              onChange={(e) => setFeatures(e.target.value)}></textarea>
          </div>
        </div>


        <div className="form-group row mb-4">
          <label for="codigo" className="col-4 col-md-3"> Descuento:</label>
          <div className="col-8">
            <input type="text" className="form-control border border-secondary" value={offerPercentage}
             onChange={(e) => setOfferPercentage(e.target.value)} />
          </div>
        </div>


        <div className="form-group text-center ">
          <button type="submit" className="btn btn-primary m-2">Editar</button>
        </div>
      </div>
    </div>


  </form>

<form className="col-md-8 offset-md-2 bg-white shadow p-3 mb-5 bg-white rounded" onSubmit={editProduct}>
<div className="row mt-5 mb-4 ">

  <div className="col-10 offset-1">
  <div className="form-group row mb-4">
      <h1 className='text-center'>Datos actuales del producto</h1>
        <div className="col-8">
        <input type="hidden" value={idProduct} onChange={(e) => setIdProduct(e.target.value)}/>
        </div>
        </div>
    <div className="form-group row mb-4">
      <label for="codigo" className="col-4 col-md-3"> Nombre:</label>
      <div className="col-8">
        <input type="text" className="form-control border border-secondary" value={products.name}
          readonly/>
      </div>
    </div>
    <div className="form-group row mb-4">
      <label for="codigo" className="col-4 col-md-3 "> Categoría:</label>
      <div className="col-8">
        <input type="text" className="form-control border border-secondary" value={products.category}
         readonly />
      </div>
    </div>

    <div className="form-group row mb-4">
      <label for="codigo" className="col-4 col-md-3"> Descripción:</label>
      <div className="col-8">
        <textarea type="text" className="form-control border border-secondary" value={products.description}
          readonly></textarea>
      </div>
    </div>

    <div className="form-group row mb-4">
      <label for="codigo" className="col-4 col-md-3"> Precio:</label>
      <div className="col-8">
        <input type="text" className="form-control border border-secondary" value={products.price}
      readonly/>
      </div>
    </div>

    <div className="form-group row mb-4">
      <label for="codigo" className="col-4 col-md-3"> Características:</label>
      <div className="col-8">
        <textarea type="text" className="form-control border border-secondary" value={products.features}
         readonly></textarea>
      </div>
    </div>


    <div className="form-group row mb-4">
      <label for="codigo" className="col-4 col-md-3"> Descuento:</label>
      <div className="col-8">
        <input type="text" className="form-control border border-secondary" value={products.offerPercentage}
         readonly/>
      </div>
    </div>


   
  </div>
</div>


</form>
</div>

  
  )
}

export default EditarVivienda;