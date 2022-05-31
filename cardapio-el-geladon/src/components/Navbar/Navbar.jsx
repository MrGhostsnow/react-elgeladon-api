import "./Navbar.css";
import sacola from "assets/icons/sacola.svg";
import logo from "assets/icons/logo.svg";

function Navbar() {
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <a className="Header__link" href="/">
            <img
              src={logo}
              width="70px"
              alt="Logo El Geladon"
              className="Logo__icone"
            />
            <span className="Logo__titulo">El Geladon</span>
          </a>
        </div>
        <div className="Header__opcoes Opcoes">
          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              alt="Sacola de compras"
              className="Sacola__icone"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
