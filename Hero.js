import React from "react";
import "../components/Hero.css";
import heromp4 from '../img/finalogo.png';
import dashes from '../img/twodashes.png';
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
      <div className="hero-container">
        <div  className="slenda-row justify-content-around" >
        
            <div  className="col-md-6">
            <div><img src={dashes} alt="Hero" style={{ width: '100px', height: '100px' }}/>
                <h1 className="tranq-h1">TRANQUIL</h1></div>
  
                <p className="para">UNIVERSITY</p>

                <p className="tranquil-p">Unlock your Potential, Shape your Future!</p>
               <div className="buttoncheck"> <button className="btn btn-md btn-primary">
                  Learn More</button></div>
            </div>

            <div className="col-md-6">
                <img src={heromp4} alt="Hero" style={{ width: '270px', height: '270px' }}/>
            </div>

        </div>  
      </div>
  );
};

export default Hero;

