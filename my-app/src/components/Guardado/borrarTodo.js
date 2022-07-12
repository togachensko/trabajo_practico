
import { httpDelete } from "../../utils/httpFunctions";

function Deletetodo({ ids }) {



    const array1 = ids;

    const deleteVivienda = (e) => {
        e.preventDefault()
        array1.forEach(id => {
            httpDelete(`api/CartItemViewSet/${id}/`)
                .then(
                    window.location.reload(true)
                )
        });

    }





    return (
        <form onSubmit={deleteVivienda}>

            <button type="submit" class="btn btn-danger m-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                </svg>Eliminar Todo</button>
        </form>
    )
}

export default Deletetodo;