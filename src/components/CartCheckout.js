import { db } from "./firebase";
import { contexto } from "./CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState, useEffect } from "react";
import validator from "validator";

const CartCheckout = () => {
    const useCartContext = useContext(contexto);
    const { carrito, totalPrecio, limpiarCarrito, totalProductos } = useCartContext;
    const [buyerName, setBuyerName] = useState("");
    const [buyerEmail, setBuyerEmail] = useState("");
    const [buyerPhone, setBuyerPhone] = useState("");
    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPhone, setValidPhone] = useState(false);

    const handleNameChange = (e) => {
        setBuyerName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setBuyerEmail(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setBuyerPhone(e.target.value);
    }

    const handleCheckout = () => {
        const orden = {
            buyer: {
                name: buyerName,
                phone: buyerPhone,
                email: buyerEmail
            },
            items: carrito,
            date: serverTimestamp(),
            total: totalPrecio
        }

        const ordenesCollection = collection(db, "ordenes");
        addDoc(ordenesCollection, orden);
        limpiarCarrito()
    }

    useEffect(() => {
        setValidName(validator.isAlpha(buyerName, "es-ES", { ignore: " " }));
        setValidEmail(validator.isEmail(buyerEmail));
        setValidPhone(validator.isNumeric(buyerPhone, "es-ES"));
    }, [buyerName, buyerEmail, buyerPhone]);


    return (
        <>
            <div className="cart-checkout-container">
                <h2>Checkout Information</h2>
                <form className="cart-checkout-form">
                    <div className="cart-checkout-input">
                        <input onChange={handleNameChange} value={buyerName} placeholder=" Ingrese su nombre" error={buyerName !== "" || !validName} />
                    </div>
                    <div className="cart-checkout-input">
                        <input onChange={handlePhoneChange} value={buyerPhone} placeholder=" Ingrese su teléfono" error={buyerPhone !== "" || !validPhone} />
                    </div>
                    <div className="cart-checkout-input">
                        <input onChange={handleEmailChange} value={buyerEmail} placeholder=" Ingrese su email" error={buyerEmail !== "" || !validEmail} />
                    </div>

                </form>
                <div className="cart-checkout-total">
                    <div className="cart-checkout-info">
                        <h3>TOTAL PRODUCTOS: {totalProductos}</h3>
                        <h3>TOTAL CARRITO: $ {totalPrecio.toFixed(2)}</h3>
                    </div>
                    <div className="cart-checkout-buttons">
                        <button onClick={handleCheckout} disabled={(!validName || !validEmail || !validPhone)}>TERMINAR COMPRA</button>
                        <button onClick={() => limpiarCarrito()}>BORRAR TODO EL CARRITO</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCheckout;