import React from "react";
import Hero from "../Hero"
import WebSection from "../WebSection"
import GraphicSection from "../GraphicSection"
import Footer from "../Footer"

function Home() {
  return (
    <div>
      <Hero />
      <GraphicSection />
      <WebSection />
      <Footer />
  </div>
  );
}

export default Home;