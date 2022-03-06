import { useState } from "react"


function ItemCount(props) {

    const [contador, setContador] = useState(1);


    const plus = () => {
        if (contador < props.stock) {
            setContador(contador + 1)
        }
    }

    const minus = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const onAdd = () => { }

    return (
        <section className="card-container">
            <div className="card-body">
                <h1>Mate Imperial</h1>
                <div className="card-stock">
                    <i className="fa-solid fa-plus" onClick={plus}></i>
                    <p>{contador}</p>
                    <i className="fa-solid fa-minus" onClick={minus}></i>
                </div>
                <div className="button">
                    <button onClick={onAdd} disabled={contador === 0}>Agregar al carrito</button>
                </div>
            </div>
        </section>
    )
}

export default ItemCount;