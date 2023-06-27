import React from "react";
import AcademicExcellence from '../img/academic-excellence.png'
import DiversePrograms from '../img/diverse-programs.png'
import ResearchOpportunities from '../img/research-opportunities.png'
import '../css/About.css'
import DotImg from '../img/dot-about.png'

export default function About () {
    return (
        <section className="about-section">
            <h1>what special about tranquillians?</h1>
                <img src={DotImg} className="dot-about-first"/>
                <img src={DotImg} className="dot-about-second"/>
            <div className="academic-excellence">
                <img src={AcademicExcellence}/>
                <div>
                    <p className="title">Academic excellence</p>
                    <p className="content">A special university often emphasizes academic excellence and maintains high standards of education.<button className="seemore-btn">See more</button></p>
                </div>
            </div>
            <div className="diverse-programs">
                <img src={DiversePrograms}/>
                <div>
                    <p className="title">diverse programs</p>
                    <p className="content">Give a detailed description of the service being provided here.<button className="seemore-btn">See more</button></p>
                </div>
            </div>
            <div className="research-opportunities">
                <img src={ResearchOpportunities}/>
                <div>
                    <p className="title">research opportunities</p>
                    <p className="content">Give a detailed description of the service being provided here.<button className="seemore-btn">See more</button></p>
                </div>
            </div>
        </section>
    )
}