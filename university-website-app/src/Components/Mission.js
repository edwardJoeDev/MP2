import React from "react";
import "../css/Mission.css";
import dash from "../img/twodasheswhite.png";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const Mission = () => {
  return (
      <div className="mission-container">
            <div className="mission-row" data-aos="fade-up" data-aos-duration="2000">
                <div className="miss col-md-6 p-lg-4">
                    <img src={dash} alt="Hero" style={{ width: '200px', height: '200px' }}/>
  
                    <h1 className="missed-h1">MISSION</h1>
                    <p className="missed-p">"At Tranquil University, our mission is to provide high-quality 
                    education and foster a supportive learning environment that empowers students to achieve their full potential.
                     We are dedicated to promoting intellectual growth, personal development, and preparing our students to become responsible global citizens."</p>
            </div>  
            <div className="vission col-md-6 p-lg-4">
                    <h1 className="vised-h1">VISION</h1>
                    <p className="vised-p">"Our vision is to be a leading institution of higher education known for academic excellence, innovative teaching methods, and impactful research. We strive to cultivate a diverse community of learners who are equipped with the knowledge, skills, and ethical values to contribute positively to society."</p>
                   <div className="endlogo"><img src={dash} alt="Hero" style={{ width: '200px', height: '200px' }}/></div>
            </div>
          </div>           
      </div>      
              
  );
};

export default Mission;

