import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemDetail from "../ItemDetail";
import Spinner from "../widgets/Spinner";
import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [products, setProducts] = useState({});
    const { id } = useParams();


    useEffect(() => {

        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resultado) => {
                setProducts(resultado.data())
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [id])


    return (
        <>
            <main className="item-container">
                {loading ? <Spinner /> : <ItemDetail products={products} />}
                {error ? toast.error('Hubo un error') : null}
            </main>

        </>
    );
}

export default ItemDetailContainer;