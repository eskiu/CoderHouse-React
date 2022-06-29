import { useContext } from "react";
import { contexto } from "./CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ item, isDark }) => {
    const { borrarDelCarrito } = useContext(contexto);

    return (
        <div key={item.id} className="cart-item-container">
            <div className="cart-item">
                <div className="cart-item-img">
                    <Link to={`/item/${item.id}`}><img src={item.image} alt={item.title} /></Link>
                </div>
                <div className={isDark ? "cart-item-descr dark-mode-text" : "cart-item-descr light-mode-text"}>
                    <Link to={`/item/${item.id}`} ><h3 className={isDark ? "dark-mode-text" : "light-mode-text"}>{item.title}</h3></Link>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Total: $ {(item.price * item.cantidad).toFixed(1)}</p>
                </div>
                <div className="cart-item-button">
                    <button onClick={() => borrarDelCarrito(item)}>BORRAR PRODUCTO</button>
                </div>
            </div>
        </div >
    )
}

export default CartItem;
