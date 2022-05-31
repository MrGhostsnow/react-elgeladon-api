import "./Home.css"
import PaletaLista from "../components/PaletaLista";
import Navbar from "components/Navbar/Navbar.jsx"
import Footer from "components/Footer/Footer.jsx"




function Home() {
    return <div className="Home">
        <Navbar/>
        <div className="Home__container"> 
            <PaletaLista/>   
        </div>
        <div className="Footer__container"><Footer/></div>
    </div>;
}

export default Home;