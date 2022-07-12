import { useEffect, useState } from "react"
import { httpGetAuthorization } from "../../utils/httpFunctions"
import SubjectCards from "../SubjectCard"
import BorrarVivienda from "./borrarVivienda"
import Deletecarritocomplet from "./borrarTodo"
import { Link } from "react-router-dom"


const Guardado = () => {
    const [userData, setUserData] = useState({})
    const [userDataCarrito, setUserDataCarrito] = useState([])


    useEffect(() => {
        httpGetAuthorization('api/me').then((res) => setUserData(res.data))
    }, [])


    useEffect(() => {
        httpGetAuthorization('api/me').then((res) => setUserDataCarrito(res.data.shoppingCart))
    }, [])


    const usercarritoid = userDataCarrito.map(item => item.id)


    return (
            <div className="album py-5 bg-light">
                <div className="container">
            <h4>Tus propiedades guardadas {userData.first_name} {userData.last_name}</h4>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


                {userDataCarrito.map((subjects) => {
                    return (<div>
                        <SubjectCards subject={subjects.Product} />
                        <div class="d-flex">
                        <BorrarVivienda id={subjects.id} />

                        </div>

                    </div>)
                })}



                <Deletecarritocomplet
                    ids={usercarritoid} />



            </div>
                </div>
        </div>

    )
}

export default Guardado;