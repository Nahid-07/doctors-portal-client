import React from "react";
import Banner from "./Banner";
import Contact from "./ContactSection/Contact";
import Exceptional from "./exceptional/Exceptional";
import InfoCards from "./Info/InfoCards";
import ProvidedServices from "./providedServices/ProvidedServices";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Banner></Banner>
        <InfoCards></InfoCards>
        <ProvidedServices></ProvidedServices>
        <Exceptional></Exceptional>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
