import React from "react";
import Banner from "../Banner"
import ModalLaunchWeb from "../PortfolioItemWeb"
import Footer from "../Footer"
import web from "../../web.json";


function Web() {


  return (
    <div>
      <Banner pageTitle="Web Development Portfolio" />
      <div className="container pushFooter">
        <div class="row row-padding">
          {web.map(webItem => (
            <ModalLaunchWeb
              image={webItem.image}
              link={webItem.link}
              repo={webItem.repo}
              title={webItem.title}
              description={webItem.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Web;
