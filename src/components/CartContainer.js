import CartItem from "./CartItem";
import CartCheckout from "./CartCheckout";
import { useContext } from "react";
import { contexto } from "./CartContext";


const Carrito = () => {

    const { carrito } = useContext(contexto);


    return (
        <>
            <div className="cart-container">
                <div className="cart-products-container">
                    {carrito.map(item => (<CartItem item={item} key={item.id} />))}
                </div>
                <div className="cart-total">
                    <CartCheckout />
                </div>
            </div>
        </>
    )
}

export default Carrito;