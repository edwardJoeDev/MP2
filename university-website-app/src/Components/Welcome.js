import React from "react";
import swirl from '../img/swirl.png'
import '../css/Welcome.css';
import WelcomeVideo from '../img/welcome-to-tranquil.mp4';
import BldgStudents from '../img/building-students.png';
import DotWelcome from '../img/dot-welcome.png';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

export default function Welcome () {
    return (
        <section className="welcome-container">
            <div className="swirl" data-aos="fade-right">
                <img src={swirl} className="swirl-img"/>
                <video src={WelcomeVideo} controls>
                <source src="path_to_video/video.mp4" type="video/mp4"/>
                <source src="path_to_video/video.webm" type="video/webm"/>
                Your browser does not support the video tag.
                </video>
                <p className="welcome-tranquil">Welcome to tranquil university</p>
                <img src={DotWelcome} className="swirl-dot"/>
                <p className="welcome-tranquil-content"> Tranquil University is a prestigious institution dedicated to providing a transformative educational experience to students from diverse backgrounds. With a rich history of academic excellence, we take pride in nurturing well-rounded individuals who are ready to thrive in a dynamic and globalized world.</p>
                <button className="seemore-btn">See more</button>
            </div>
            <div className="side-photo" data-aos="fade-left">
                <img src={BldgStudents}/>
            </div>
        </section>
    )
}