import React from "react";
import AcademicExcellence from '../img/academic-excellence.png'
import DiversePrograms from '../img/diverse-programs.png'
import ResearchOpportunities from '../img/research-opportunities.png'
import '../css/About.css'
import DotImg from '../img/dot-about.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

export default function About () {
    return (
        <section className="about-section">
            <h1>what special about tranquillians?</h1>
                <img src={DotImg} className="dot-about-first" data-aos="zoom-out-right"/>
                <img src={DotImg} className="dot-about-second" data-aos="zoom-out-right"/>
            <div className="academic-excellence" data-aos="zoom-out-up">
                <img src={AcademicExcellence}/>
                <div>
                    <p className="title">Academic excellence</p>
                    <p className="content">A special university often emphasizes academic excellence and maintains high standards of education.<button className="seemore-btn">See more</button></p>
                </div>
            </div>
            <div className="diverse-programs" data-aos="zoom-out-up">
                <img src={DiversePrograms}/>
                <div>
                    <p className="title">diverse programs</p>
                    <p className="content">Give a detailed description of the service being provided here.<button className="seemore-btn">See more</button></p>
                </div>
            </div>
            <div className="research-opportunities" data-aos="zoom-out-up">
                <img src={ResearchOpportunities}/>
                <div>
                    <p className="title">research opportunities</p>
                    <p className="content">Give a detailed description of the service being provided here.<button className="seemore-btn">See more</button></p>
                </div>
            </div>
        </section>
    )
}