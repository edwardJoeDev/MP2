import React from "react";
import swirl from '../img/swirl.png'
import '../css/Welcome.css';

export default function Welcome () {
    return (
        <div className="welcome-container">
            <div className="swirl-img">
                <img src={swirl} />
            </div>
            <div>test</div>
        </div>
    )
}