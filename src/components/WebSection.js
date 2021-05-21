import React from "react";
import "../styles/style.css";
import { Link } from "react-router-dom";

// ----------------------Images---------------------------------
import fiveWire from "../images/fivewire.png";
import burger from "../images/eat-the-burger.png";
import weather from "../images/weather-app.png";
import flightSaver from "../images/flight-saver.png";
// -------------------------------------------------------

function WebSection() {
  return (
    <div>
      <div className="info1">
        <div className="container">
          <h2 class="my-h2">WEB DEVELOPMENT</h2>
          <div className="row">
            <div className="col-md-4">
              <h4 class="my-h4">SKILLS: HTML5, CSS3 (Styling &#38; Animations), JavaScript ES6, jQuery, VML, WordPress,
              Yardi RentCafe &#38; other CMS, Heroku, cPanel, GitHub, MySQL Workbench, Bootstrap, Materialize,
              UI Kit, React, Greensock Animations, API Integrations, Node, SQL, MongoDB, Git, Elementor,
                Google Developer Tools</h4>
            </div>
            <div className="col-md-8">
              <a href="https://group5-proj2.herokuapp.com/" target="_blank" rel="noreferrer"><img src={fiveWire} className="rounded homeThumb shadow" alt="" /></a>
              <a href="https://scibettas1.github.io/flightSaver/" target="_blank" rel="noreferrer"><img src={flightSaver} className="rounded homeThumb shadow" alt="" /></a>
              <a href="https://eat-the-burger-scibetta.herokuapp.com/" target="_blank" rel="noreferrer"><img src={burger} className="rounded homeThumb shadow" alt="" /></a>
              <a href="https://scibettas1.github.io/weather/" target="_blank" rel="noreferrer"><img src={weather} className="rounded homeThumb shadow" alt="" /></a>
              <Link to="/web"><button type="button" className="view-btn">View More</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebSection;