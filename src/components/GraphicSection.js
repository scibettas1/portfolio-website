import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

// ----------------------Images---------------------------
import crossroads7619 from "../images/crossroads7-6-19.jpg";
import dingbatz102515 from "../images/dingbatz_10_25_15.jpg";
import upcomingShows from "../images/upcoming-shows.jpg";
import henrietta12912 from "../images/12_9_12_henrietta_hudson.jpg";
// -------------------------------------------------------


function GraphicSection() {
  return (
    <div>
      <div className="info2">
        <div className="container">
          <h2 class="my-h2">GRAPHIC DESIGN</h2>
          <div className="row">
            <div className="col-md-4">
              <h5 class="my-h5">SKILLS: Adobe Creative Suite including Photoshop &#38; Illustrator, Typography, Layout Design,
              Digital Color Corrections, Photo Manipulation</h5>
            </div>
            <div className="col-md-8">
              <img src={crossroads7619} className="rounded homeThumb shadow" alt="" />
              <img src={dingbatz102515} className="rounded homeThumb shadow" alt="" />
              <img src={upcomingShows} className="rounded homeThumb shadow" alt="" />
              <img src={henrietta12912} className="rounded homeThumb shadow" alt="" />
              <Link to="/graphic"><button type="button" className="view-btn">View More</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicSection;