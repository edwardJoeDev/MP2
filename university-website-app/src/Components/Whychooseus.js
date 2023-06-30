import React from "react";
import ComEngImg from '../img/comm-eng.png'
import CampFaclImg from '../img/camp-facl.png'
import CampFacilImg from '../img/camp-facil.png'
import SuppServImg from '../img/support-serv.png'
import DotWelcome from '../img/dot-welcome.png'
import DotTitle from '../img/dot-about.png'
import '../css/Whychooseus.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();


export default function WhyChooseUs () {
    return (
        <section className="choose-us">
            <div className="choose-us-div">
                <img src={DotTitle} className="why-choose-us-title-dot"/>
                <h1 className="why-choose-us-title">why choose us?</h1>
            </div>
            <div className="choose-us-cards">
                <div className="choose-us-card" data-aos="fade-up-right">
                    <p>Community Engagement</p>
                    <img src={DotWelcome} className="dot-img"/>
                    <img src={ComEngImg} className="choose-img"/>
                </div>
                <div className="choose-us-card" data-aos="fade-up-right">
                    <p>Campus Facilities</p>
                    <img src={DotWelcome} className="dot-img"/>
                    <img src={CampFaclImg} className="choose-img"/>
                </div>
                <div className="choose-us-card" data-aos="fade-up-left">
                    <p>Campus Facilities</p>
                    <img src={DotWelcome} className="dot-img"/>
                    <img src={CampFacilImg} className="choose-img"/>
                </div>
                <div className="choose-us-card" data-aos="fade-up-left">
                    <p>Support Services</p>
                    <img src={DotWelcome} className="dot-img"/>
                    <img src={SuppServImg} className="choose-img"/>
                </div>
            </div>
        </section>
    )
}