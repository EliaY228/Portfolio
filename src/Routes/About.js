import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Bg_img_2 from "../Components/Bg_img_2";
import Img3 from "../Assets/Img_6.jpeg";
import AboutContent from "../Components/AboutContent";
import Skills from "../Components/Skills";

const About = () => {
  return (
    <div>
      <Navbar />
      <Bg_img_2
        heading="ABOUT"
        text="Here are some details about myself."
        img={Img3}
      />
      <AboutContent />
      <Skills />
      <Footer />
    </div>
  );
};

export default About;
