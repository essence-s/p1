import React from "react";
import "./header.css";
import headersvg from "./files/header.svg";
import happy from "./files/happy3.svg";

// import svgTarget from 'assets/target.svg'
import { ContainerMaxWidth } from "components/common";

const Header = () => {
  return (
    <div className="header" id="home">
      <img className="fondosvg" alt="fsvg" src={headersvg} />

      <ContainerMaxWidth className="header-container">
        <div className="header-content">
          <div className="titulo">Consigue </div>
          <div className="titulo2"> lo Mejor aqui </div>
          <p>Si lo nesesitas lo tenemos solo aqui!</p>
          <p>asi que esperas Consulte no pierdas tiempo</p>
          <div className="header-content_input">
            <button>Pedir Consulta</button>
          </div>
        </div>

        <div className="header-img">
          <img src={happy} alt="" />
          {/* <Object3d></Object3d> */}
        </div>
      </ContainerMaxWidth>
    </div>
  );
};

export default Header;

