import React from "react";
import "./Header.css";
import tshirts from "./Logo-PNG1.png";


const Header = () => {
  return (
    <div>
      <header className="logo">
        <a href="/">
        <img src={tshirts} className='imgNot' alt="logo" />
        </a>

        <div className="buscar">
          <form className="buscador" method="get" name="buscador">
            <input type="search" placeholder="Buscar" />
            <button type="submit" className="botonBusqueda">
              buscar
            </button>
          </form>
        </div>
        <div className="sectionStarted">
          <a href="/login" className="newStarted">
            <span>Get Started</span>
          </a>
        </div>
      </header>
      <hr className="lineHeader" />
    </div>
  );
};

export default Header;
