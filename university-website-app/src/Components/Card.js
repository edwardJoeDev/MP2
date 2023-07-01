import React from 'react';
import "../css/Cards.css";
import DotImg from '../img/dot-about.png'
import students from "../img/enroll.jpg";
import slev from "../img/excell.jpeg";
import ground from "../img/ground.jpeg";
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const Card = () => {
  return (
    <div className="container-fluid card-container">
        <div className="firstrow">
                <div className="col-md-4">
                    <img src={DotImg} alt="grinad" style={{ width: '100px', height: '100px' }}/></div>
        
                <div className="col-md-4">
                     <h1 >NEWS FEEDS AND ANNOUNCEMENTS</h1>
                </div>
                <div className="col-md-4" >
                    <img src={DotImg} alt="grinad" style={{ width: '100px', height: '100px' }}/>
                </div>
         </div>   


      <div className="row" data-aos="fade-up" data-aos-duration="1000">
        <div className="col-md-4">
          <div className="card card-overlay">
           
            <img className="card-img-top" src={students}  alt="firtcopy" />
            <div className="overlay d-flex flex-column">
              <h4>REGISTRATION FOR SUMMER SEMESTRAL OPEN</h4>
              <p>"Attention Students: Spring Semester Registration Now Open! We are pleased to inform all Tranquil University students that registration for the upcoming Spring semester is now open. This is your opportunity to enroll in a wide range of courses offered across various disciplines. Whether you're pursuing a degree or seeking to expand your knowledge in a specific area, we have a diverse selection of courses to meet your academic goals. Don't miss out on securing your preferred classes and time slots. Visit the university's online portal or contact the registrar's office for more information and to complete your registration. Plan your schedule ahead and embark on an
                 enriching educational journey with Tranquil University.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-overlay">
            <img className="card-img-top" src={slev} alt="secondcopy" />
            <div className="overlay d-flex flex-column">
              <h4>TOP EDUCATIONAL ACHIEVEMENTS</h4>
              <p>Tranquil University Receives National Recognition for Academic Excellence. We are proud to announce that Tranquil University has been recognized as one of the top educational institutions in the country for its commitment to academic excellence.
                 The university's rigorous curriculum, dedicated faculty, and state-of-the-art facilities have contributed to this prestigious recognition. This achievement reflects our ongoing efforts to provide students with the highest quality education and equip them with the skills needed for success in their chosen fields. We extend our heartfelt gratitude to our faculty, staff, and students for their hard work and dedication that has made this accomplishment possible.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-overlay">
            <img className="card-img-top" src={ground} alt="thirdcopy" />
            <div className="overlay d-flex flex-column">
              <h4>SCHOOL GROUNDBREAKING</h4>
              <p>Tranquil University Launches Innovative Research Initiative. 
                We are excited to announce the launch of our groundbreaking research initiative aimed at addressing global challenges and advancing knowledge in various fields. This interdisciplinary program brings together renowned faculty, talented researchers, and bright students to collaborate on cutting-edge projects. Through this initiative, Tranquil University aims to make significant contributions to scientific discoveries, technological advancements, and societal progress. We look forward to fostering a culture of research excellence and providing our students with unique opportunities to engage in groundbreaking research that shapes the future</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
