import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Bg_img_2 from "../Components/Bg_img_2";
import Img2 from "../Assets/Img_4.jpeg";
import Projects from "../Components/Projects";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Bg_img_2
        heading="PROJECTS."
        text="Are you ready to change the way you style your websites?"
        img={Img2}
      />
      <Projects />
      <Footer />
    </div>
  );
};

export default Project;
