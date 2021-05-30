import React from "react";
import Banner from "../Banner"
import ModalLaunchGraphic from "../PortfolioItem";
import Footer from "../Footer"
import graphic from "../../graphic.json";

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
// -------------------------------------------------------------


function Graphic() {
  return (
    <div>
      <Banner pageTitle="Graphic Design Portfolio" />
      <div className="container pushFooter">
        <div className="row row-margin">
          {graphic.map(graphicItem => (
            <ModalLaunchGraphic
              image={graphicItem.image}
              title={graphicItem.title}
              description={graphicItem.description}
              alt={graphicItem.alt}
              className1={graphicItem.className1}
              className2={graphicItem.className2}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Graphic;
