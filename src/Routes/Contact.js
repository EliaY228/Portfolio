import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Img3 from "../Assets/Img_5.png";
import Bg_img_2 from "../Components/Bg_img_2";
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Bg_img_2 heading="CONTACT." text="Lets have a chat!" img={Img3} />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
