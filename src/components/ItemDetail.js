import ItemCount from "./ItemCount"

function ItemDetail({ products }) {
    const onAdd = (e) => {
        return e
    }

    return (
        <>
            <div className="detail-container">
                <div className="detail-card-container">
                    <div className="img-container">
                        <img src={products.image} alt="" />
                    </div>
                    <div className="detail-caract">
                        <div className="detail-title-section">
                            <p className="detail-category">{products.category}</p>
                            <h1>{products.title}</h1>
                        </div>
                        <p className="detail-price-section">US$ {products.price}</p>
                        <ItemCount stock={products.stock} onAdd={onAdd} products={products} />
                    </div>
                </div>
                <div className="detail-description">
                    <p className="detail-description-title"><strong>Descripción</strong></p>
                    <p>{products.description}</p>
                </div>
            </div>
        </>
    )
}

export default ItemDetail