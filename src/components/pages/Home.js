import { NavLink } from "react-router-dom"
import HandHoldingMoney from '../assets/HandHoldingMoney'

function Home() {

    return (
        <>
            <div className="background-home">
                <div className="home-container">
                    <div className="home-img-container">
                        <HandHoldingMoney />
                        <h1>SHIRTY</h1>
                    </div>
                    <NavLink to={`/shop`}><button>BIENVENIDO</button></NavLink>
                </div>
            </div>
        </>
    )
}

export default Home