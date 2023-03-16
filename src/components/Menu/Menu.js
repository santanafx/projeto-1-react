import React from "react";
import "./Menu.css";

export const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu__logo">
        <img src="../images/instagram-logo.jpg" alt="Logo instagram" />
      </div>
      <div className="menu__lista">
        <img src="../images/casa.jpg" alt="" className="menu__icons" />
        <a href="#" className="menu__op">Casa</a>
      </div>
      <div className="menu__lista">
        <img src="../images/lupa.jpg" alt="" className="menu__icons" />
        <a href="#" className="menu__op">Lupa</a>
      </div>
      <div className="menu__lista">
        <img src="../images/bussula.jpg" alt="" className="menu__icons" />
        <a href="#" className="menu__op">Bussula</a>
      </div>
      <div className="menu__lista">
        <img src="../images/video.jpg" alt="" className="menu__icons" />
        <a href="#" className="menu__op">Video</a>
      </div>
      <div className="menu__lista">
        <img src="../images/msg.jpg" alt="" className="menu__icons" />
        <a href="#" className="menu__op">Msg</a>
      </div>
      <div className="menu__opcoes">
        <img src="../images/mais.jpg" alt="" className="menu__icons" />
        <a href="#" className="menu__op">Mais</a>
      </div>
    </nav >
  );
};
