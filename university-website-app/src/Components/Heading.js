import React from "react"
import '../css/Heading.css'
import Logo from '../img/Logo.png'

export default function Heading () {
    return (
        <div className="heading-container">
            <header className="heading">
                <img src={Logo}/>
                <div className="search-bar">
                <input placeholder="Input text"></input>
                <button>Search</button>
                </div>
            </header>
        </div>
    )
}