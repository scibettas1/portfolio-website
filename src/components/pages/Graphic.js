import React from "react";
import Banner from "../Banner"
import ModalLaunchGraphic from "../PortfolioItemGraphic";
import Footer from "../Footer"
import graphic from "../../graphic.json";


function Graphic() {
  return (
    <div>
      <Banner pageTitle="Graphic Design Portfolio" />
      <div className="container pushFooter">
        <div className="row row-padding">
          {graphic.map(graphicItem => (
            <ModalLaunchGraphic
              image={graphicItem.image}
              title={graphicItem.title}
              description={graphicItem.description}
              alt={graphicItem.alt}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Graphic;
