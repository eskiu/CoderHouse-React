import { useContext } from "react";
import { contexto } from "../CartContext";
import Cart from '../assets/Cart'

const CartWidget = () => {

    const { totalProductos } = useContext(contexto);

    return (
        <div className="cart-btn">
            <div className="nav-icon">
                <Cart />
            </div>
            {totalProductos > 0 ? <div className="cart-items">{totalProductos}</div> : null}
        </div>
    )
}

export default CartWidget;