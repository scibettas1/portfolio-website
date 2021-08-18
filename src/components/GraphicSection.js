import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

// ----------------------Images---------------------------
import crossroads7619 from "../images/crossroads7-6-19.jpg";
import enclaveFlyer from "../images/resident-referral-enclave.jpg";
import one500Flyer from "../images/resident-meet-and-greet.jpg";
import shanaPLogo from "../images/shanap-logo.png";
// -------------------------------------------------------


function GraphicSection() {
  return (
    <div>
      <div className="info1">
        <div className="container">
          <h2 class="my-h2">GRAPHIC DESIGN</h2>
          <div className="row">
            <div className="col-md-4">
              <h4 class="my-h4">SKILLS: Adobe Creative Suite including Photoshop &#38; Illustrator, Typography, Layout Design,
              Digital Color Corrections, Photo Manipulation</h4>
            </div>
            <div className="col-md-8">
              <img src={one500Flyer} className="rounded homeThumb shadow" alt="" />
              <img src={enclaveFlyer} className="rounded homeThumb shadow" alt="" />
              <img src={crossroads7619} className="rounded homeThumb shadow" alt="" />
              <img src={shanaPLogo} className="rounded homeThumb shadow" alt="" />
              <Link to="/graphic"><button type="button" className="view-btn">View More</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicSection;