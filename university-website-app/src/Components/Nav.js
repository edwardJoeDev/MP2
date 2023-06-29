import React from "react";
import '../css/Nav.css'
import { Outlet, Link } from "react-router-dom"
import Headings from "./Heading";

const NavBar = () => {
    return (
        <>
        <Headings />
        <nav className="navbar">
            <ul className="navbar-list">
                <li>
                    <Link to="/" className="navbar-list-link">home</Link>
                </li>
                <li>
                    <Link to="/about" className="navbar-list-link">about</Link>
                </li>
                <li>
                    <Link to="/campus" className="navbar-list-link">campus</Link>
                </li>
                <li>
                    <Link to="/courses" className="navbar-list-link">courses</Link>
                </li>
                <li>
                    <Link to="/student_portal" className="navbar-list-link">student portal</Link>
                </li>
                <li>
                    <Link to="/contact" className="navbar-list-link">contact us</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>

    )
}

export default NavBar;