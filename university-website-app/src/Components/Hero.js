import React from "react";
import "../css/Hero.css";
// import heromp4 from '../img/finalogo.png';
// import dashes from '../img/twodashes.png';
import Logo from '../img/Logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const Hero = () => {
  return (
      <div className="hero-container">
        <div  className="slenda-row justify-content-around" data-aos="fade-up" >
        
            <div  className="col-md-6 text-center">
            <div ><img src={Logo} alt="Hero" style={{ width: '100px', height: '100px' }}/>
                <h1 className="tranq-h1">TRANQUIL</h1></div>
  
                <p className="para">UNIVERSITY</p>

                <p className="tranquil-p">Unlock your Potential, Shape your Future!</p>
               <div className="buttoncheck"> <button className="seemore-btn">
                  Learn More</button></div>
            </div>

            {/* <div className="col-md-6">
                <img src={heromp4} alt="Hero" style={{ width: '270px', height: '270px' }}/>
            </div> */}

        </div>  
      </div>
  );
};

export default Hero;

