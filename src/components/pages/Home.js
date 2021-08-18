import React from "react";
import Hero from "../Hero";
import WebSection from "../WebSection";
import GraphicSection from "../GraphicSection";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Hero />
      <GraphicSection />
      <WebSection />
      <ContactSection />
      <Footer />
  </div>
  );
}

export default Home;