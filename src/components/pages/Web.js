import React from "react";
import Banner from "../Banner"
import ModalLaunchWeb from "../PortfolioItemWeb"
import Footer from "../Footer"
import web from "../../web.json";

//This is necessary for the production build to add images to media directory.
// ----------------------Images----------------------------
// eslint-disable-next-line
import password from "../../images/password-generator.png";
// eslint-disable-next-line
import planner from "../../images/day_planner.png";
// eslint-disable-next-line
import readMe from "../../images/readMe-generator.png";
// eslint-disable-next-line
import eTracker from "../../images/employee_tracker.png";
// eslint-disable-next-line
import fiveWire from "../../images/fivewire.png";
// eslint-disable-next-line
import burger from "../../images/eat-the-burger.png";
// eslint-disable-next-line
import weather from "../../images/weather-app.png";
// -------------------------------------------------------

function Web() {


  return (
    <div>
      <Banner pageTitle="Web Development Portfolio" />
      <div className="container pushFooter">
        <div class="row row-margin">
          {web.map(webItem => (
            <ModalLaunchWeb
              image={webItem.image}
              link={webItem.link}
              repo={webItem.repo}
              title={webItem.title}
              description={webItem.description}
              alt={webItem.alt}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Web;
