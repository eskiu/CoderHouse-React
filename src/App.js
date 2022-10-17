import NavBar from "./components/layout/NavBar"
import ItemListContainer from "./components/pages/ItemListContainer"
import ItemDetailContainer from "./components/pages/ItemDetailContainer"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/pages/Cart"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MiProvider from "./components/CartContext"
import Home from "./components/pages/Home"

function App() {


    return (
        <MiProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/shop" element={<ItemListContainer />} />
                    <Route path="/categoria/:id" element={<ItemListContainer />} />
                    <Route path="/accesorios/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <ToastContainer />
            </ BrowserRouter>
        </MiProvider>
    )
}

export default App