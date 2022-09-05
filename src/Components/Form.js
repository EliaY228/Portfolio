import "./Form.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Popup from "../Components/Popup";

const Form = () => {
  const form = useRef();
  const [btnPopup, setBtnPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Elia_Y228",
        "template_2jxo5zc",
        form.current,
        "fEtSTN6TFcb3Zh8To"
      )
      .then(
        (result) => {
          console.log(result.text);
          setBtnPopup(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <h2>Feel free to send a Message!</h2>
        <div className="inputBox">
          <input type="text" name="name" required="required" />
          <span>Enter your Name</span>
        </div>
        <div className="inputBox">
          <input type="text" name="email" required="required" />
          <span>Enter your email</span>
        </div>
        <div className="inputBox">
          <textarea rows="6" name="message" required="required" />
          <span>Type your Message here.</span>
        </div>
        <div className="inputBox">
          <input type="submit" value="Send" />
        </div>
      </form>
      <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
        <p>Your details have been succesfully submitted.</p>
        <h3>Submission Done!</h3>
      </Popup>
    </div>
  );
};

export default Form;
