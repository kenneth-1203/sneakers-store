import React, { Component } from "react";

import Navbar from "../layout/Navbar";
import BrandCard from "../card/BrandCard";

import nike from "../../assets/nike-logo.png";
import adidas from "../../assets/adidas-logo.png";
import underarmour from "../../assets/underarmour-logo.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="d-flex justify-content-center card-group">
          <div className="row">
            <BrandCard image={nike} paddingTop="4em" height="200px" />
            <BrandCard image={adidas} height="180px" />
            <BrandCard image={underarmour} paddingTop="3em" height="210px" />
          </div>
        </div>
      </div>
    );
  }
}
