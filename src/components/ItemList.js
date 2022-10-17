import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <>
            {products.map((productos) => {
                return <Item key={productos.id} producto={productos} />
            })}
        </>
    )

}

export default ItemList