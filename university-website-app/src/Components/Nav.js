import React from "react";
import '../css/Nav.css'

export default function NavBar () {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li>home</li>
                <li>about</li>
                <li>campus</li>
                <li>courses</li>
                <li>student portal</li>
                <li>contact us</li>
            </ul>
        </div>
    )
}