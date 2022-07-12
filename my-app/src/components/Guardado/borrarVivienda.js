import { useHistory } from "react-router"

import { httpDelete } from "../../utils/httpFunctions";

function BorrarVivienda({ id }) {

    const history = useHistory();



    const deleteProduct = (e) => {
        e.preventDefault()
        httpDelete(`api/CartItemViewSet/${id}/`)
            .then(
                window.location.reload(true)
            )
    }





    return (
        <form onSubmit={deleteProduct}>

            <button type="submit" class="btn btn-danger m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                </svg>Eliminar Vivienda</button>
        </form>
    )
}

export default BorrarVivienda;