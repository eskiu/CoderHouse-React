import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemList from "../ItemList";
import Spinner from "../widgets/Spinner";
import { db } from "../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [productos, setProductos] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        if (id) {
            const q = query(collection(db, "productos"), where("category", "==", id))

            getDocs(q)
                .then((resp) => {
                    setLoading(true)
                    setProductos(resp.docs.map(p => ({ productos: p.data(), id: p.id })))
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        } else {
            getDocs(collection(db, "productos"))
                .then((resp) => {
                    setLoading(true)
                    setProductos(resp.docs.map(p => ({ productos: p.data(), id: p.id })))
                })
                .catch(() => {
                    setError(true);
                })
                .finally(() => {
                    setLoading(false);
                })
        }
    }, [id])

    return (
        <>
            <main className="item-container">
                {loading ? <Spinner /> : <ItemList products={productos} />}
                {error ? toast.error('Hubo un error') : null}
            </main>

        </>
    );
}

export default ItemListContainer;