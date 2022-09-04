import "./Bg_img_2.css";
import React, { Component } from "react";

class Bg_img_2 extends Component {
  render() {
    return (
      <div className="bg_img_2">
        <div className="mask">
          <img className="img_bg2" src={this.props.img} alt="Bg_img_2" />
        </div>
        <div className="content">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Bg_img_2;
