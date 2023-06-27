import React from "react";
import '../css/Heading.css';
import Logo from '../img/Logo.png';
import SchlBldg from '../img/school-bldg-heading.png';

export default function Heading () {
    return (
            <header className="heading">
                <img src={Logo} className="school-logo"/>
                <div className="search-bar">
                <button>Search</button>
                </div>
                <img src={SchlBldg} className="school-building"/>
            </header>
    )
}