import React from "react"
import '../css/Heading.css'
import Logo from '../img/Logo.png'

export default function Heading () {
    return (
        <div className="heading-container">
            <header className="heading">
                <img src={Logo}/>
                <ul className="navbar-heading">
                    <li>Student Portal</li>
                    <li>Our Programs</li>
                    <li>Apply Now</li>
                    <li>Contact Us</li>
                </ul>
                <div>
                <input placeholder="Input text"></input>
                <button>Search</button>
                </div>
            </header>
        </div>
    )
}