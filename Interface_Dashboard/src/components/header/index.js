import React from "react";
import './style.css';
import logo from '../../assets/Wiso.gif'

export default function Header() {

    return (
        <header className="header-main">
            <img className="header-logo" id="themeicon"src={logo}></img>
        </header>
    );
}