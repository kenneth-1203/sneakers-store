import React, { Component } from "react";

import Navbar from "../layout/Navbar";
import ShoeCard from "../card/ShoeCard";
import Pagination from "../pagination/Pagination";

import ultraboost from "../../assets/ultraboost.png";
import airjordan1 from "../../assets/airjordan1.png";
import stansmith from "../../assets/stansmith.png";

export default class Shop extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div className="d-flex justify-content-center content">
            <ShoeCard
              image={ultraboost}
              height="130px"
              shoeName="UltraBoost 3.0 'Clear Grey'"
              shoeText="These running shoes combine comfort and high-performance technology for a best-ever-run feeling. 
              They have a stretchy knit upper that adapts to the changing shape of your foot as you run."
              price="RM 730.00"
            />
            <ShoeCard
              image={airjordan1}
              height="145px"
              shoeName="Air Jordan 1 Retro High OG"
              shoeText="Familiar but always fresh, the iconic Air Jordan 1 is remastered for today's sneakerhead culture.
               This Retro High OG version goes all in with full-grain leather, comfortable cushioning and classic design details."
               price="RM 499.00"
            />
            <ShoeCard
              image={stansmith}
              height="130px"
              shoeName="Adidas Stan Smith Shoes"
              shoeText="Roll with the classic. Back in the day, Stan Smith won big on the tennis court. Slide into the adidas shoe worthy
               of his name and you'll win big on the streets. Top to bottom, these shoes capture the essential style of the 1971 original."
               price="RM 380.00"
            />
        </div>
        <div className="d-flex justify-content-center py-5">
          <Pagination />
        </div>
      </div>
    );
  }
}
