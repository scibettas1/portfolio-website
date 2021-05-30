import React from "react";
import "../styles/style.css"
import { gsap } from "gsap";

// ----------------------Images---------------------------
import profile from "../images/profile.jpg";
import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import circle from "../images/circle.png";
// -------------------------------------------------------


function Hero() {

  if (window.matchMedia('(max-device-width: 480px)').matches)  {
    //card animations
    // gsap.from(".dot1", { delay: 2, x: 3000 });
    // gsap.to(".dot1", { delay: 2, duration: 2, x: 0 , ease: "bounce" });
    // gsap.from(".dot2", { delay: 3, x: 3000 });
    // gsap.to(".dot2", { delay: 3, duration: 2, x: 0, ease: "bounce" });
    // gsap.from(".dot3", { delay: 4, x: 3000 });
    // gsap.to(".dot3", { delay: 4, duration: 2, x: 0, ease: "bounce" });
    // gsap.from(".dot4", { delay: 5, x: 3000 });
    // gsap.to(".dot4", { delay: 5, duration: 2, x: 0, ease: "bounce" });
} else {
    //dot animations
    gsap.from(".dot1", { delay: 2, x: 3000 });
    gsap.to(".dot1", { delay: 2, duration: 2, x: 0, ease: "bounce" });
    gsap.from(".dot2", { delay: 3, x: 3000 });
    gsap.to(".dot2", { delay: 3, duration: 2, x: 0, ease: "bounce" });
    gsap.from(".dot3", { delay: 4, x: 3000 });
    gsap.to(".dot3", { delay: 4, duration: 2, x: 0, ease: "bounce" });
    gsap.from(".dot4", { delay: 5, x: 3000 });
    gsap.to(".dot4", { delay: 5, duration: 2, x: 0, ease: "bounce" });
}

  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row">
          <div className="col-md-2"></div>
            <div className="col-md-5">
            <div className="row"></div>
            <div className="row"></div>
              <div className="row"><img src={circle} className="dot1" alt="circle"/></div>
              <div className="row"><img src={circle} className="dot2" alt="circle"/></div>
              <div className="row"><img src={circle} className="dot3" alt="circle"/></div>
              <div className="row"><img src={circle} className="dot4" alt="circle"/></div>
            </div>
            <div className="col-md-5">
              <img src={profile} className="rounded-circle profile-img" alt="profile sam scibetta"/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <h1>Sam Scibetta<br />
                Graphic &amp; Web<br />
                Designer</h1>
                <a href="https://www.facebook.com/int3stine.no0se/" target="_blank" rel="noreferrer"><img src={facebook} className="social-icon" alt="facebook logo"/></a>
                <a href="https://www.linkedin.com/in/samantha-scibetta/" target="_blank" rel="noreferrer"><img src={linkedin} className="social-icon" alt="linkedin logo"/></a>
                <a href="https://github.com/scibettas1" target="_blank" rel="noreferrer"><img src={github} className="social-icon" alt="github logo"/></a>
            </div>

            <div className="col-md-5">
              <p>Sam Scibetta is a Graphic Designer and Full-Stack Web Developer with 10 + years experience with HTML, CSS, CMS
                (including WordPress), and Adobe Creative Suite, 6 months experience with JavaScript, and knowledge of
                React. She graduated from William Paterson University with a BFA in Fine Art in 2009 and recently graduated from
                Rutgers University of New Brunswick with a Professional Certificate in Full-Stack Web Development.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Hero;