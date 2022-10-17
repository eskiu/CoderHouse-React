import CartContainer from "../CartContainer"
import { contexto } from "../CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Cart = () => {
    const { carrito } = useContext(contexto)

    return (
        <>
            <div className="cartBackground">
                {carrito.length > 0
                    ? <CartContainer />
                    : <div className="backStore">
                        <div className="empty-cart">No hay productos en el carrito</div>
                        <div className="b-back-store">
                            <Link to="/shop"><button>VOLVER A LA TIENDA</button></Link>
                        </div>
                    </div>}
            </div>
        </>
    )



}

export default Cart;