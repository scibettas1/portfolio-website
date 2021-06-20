import React from "react";
import Banner from "../Banner";
import ModalLaunchGraphic from "../PortfolioItem";
import Footer from "../Footer";
import reFlyers from "../../re-flyers.json";
import music from "../../music-flyers.json";
import logos from "../../logos.json";
import visual from "../../visual.json"

//This is necessary for the production build to add images to media directory.
// ----------------------Images---------------------------------
// eslint-disable-next-line
import crossroads7619 from "../../images/crossroads7-6-19.jpg";
// eslint-disable-next-line
import dingbatz102515 from "../../images/dingbatz_10_25_15.jpg";
// eslint-disable-next-line
import upcomingShows from "../../images/upcoming-shows.jpg";
// eslint-disable-next-line
import henrietta12912 from "../../images/12_9_12_henrietta_hudson.jpg";
// eslint-disable-next-line
import clubHouse from "../../images/clubhouse_recording_logo.jpg";
// eslint-disable-next-line
import directions from "../../images/directions_interpretation.jpg";
// eslint-disable-next-line
import endingDG from "../../images/ending_dan_gordon_band_logo.jpg";
// eslint-disable-next-line
import song from "../../images/song_interpretation.jpg";
// eslint-disable-next-line
import deadPonies from "../../images/the_dead_ponies_band_logo.jpg";
// eslint-disable-next-line
import waverlyMenu from "../../images/Waverly_Menu.jpg";
// eslint-disable-next-line
import enclaveFlyer from "../../images/resident-referral-enclave.jpg";
// eslint-disable-next-line
import one500Flyer from "../../images/resident-meet-and-greet.jpg";
// eslint-disable-next-line
import linkFlyer from "../../images/link-flyer.png";
// eslint-disable-next-line
import shanaPLogo from "../../images/shanap-logo.png";
// eslint-disable-next-line
import nwOpen from "../../images/nwOpenHouse.jpg";
// eslint-disable-next-line
import garwood from "../../images/garwood2020.png";
// -------------------------------------------------------------


function Graphic() {
  return (
    <div>
      <Banner pageTitle="Graphic Design Portfolio" />
      <div className="container pushFooter">
      <h4><br />Real Estate Flyers</h4>
      <hr />
        <div className="row row-margin">
          {reFlyers.map(reFlyerItem => (
            <ModalLaunchGraphic
              image={reFlyerItem.image}
              title={reFlyerItem.title}
              description={reFlyerItem.description}
              alt={reFlyerItem.alt}
              className1={reFlyerItem.className1}
              className2={reFlyerItem.className2}
            />
          ))}
        </div>
        <h4>Music Flyers</h4>
        <hr />
        <div className="row row-margin">
          {music.map(musicItem => (
            <ModalLaunchGraphic
              image={musicItem.image}
              title={musicItem.title}
              description={musicItem.description}
              alt={musicItem.alt}
              className1={musicItem.className1}
              className2={musicItem.className2}
            />
          ))}
        </div>
        <h4>Logos</h4>
        <hr />
        <div className="row row-margin">
          {logos.map(logoItem => (
            <ModalLaunchGraphic
              image={logoItem.image}
              title={logoItem.title}
              description={logoItem.description}
              alt={logoItem.alt}
              className1={logoItem.className1}
              className2={logoItem.className2}
            />
          ))}
        </div>
        <h4>Visual Interpretations</h4>
        <hr />
        <div className="row row-margin">
          {visual.map(visualItem => (
            <ModalLaunchGraphic
              image={visualItem.image}
              title={visualItem.title}
              description={visualItem.description}
              alt={visualItem.alt}
              className1={visualItem.className1}
              className2={visualItem.className2}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Graphic;
