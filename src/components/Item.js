import { Link } from "react-router-dom"


const Item = ({ producto }) => {
    const { productos, id } = producto;

    return (
        <Link to={`/item/${id}`}>
            <section className="card-container">
                {<div className="card-body">
                    <div className="imgContainer">
                        <img className="imgCard" src={productos.image} alt="" />
                    </div>
                    <div className="card-text">
                        <p className="tittle-card">{productos.title}</p>
                        <p className="price-card">US$ {productos.price}</p>
                    </div>
                </div>}

            </section>
        </Link>
    )

}

export default Item