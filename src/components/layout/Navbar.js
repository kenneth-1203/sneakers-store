import React, { Component } from "react";

import { Link } from "react-router-dom";

import SidebarItem from "../layout/SidebarItem";

import airforce1 from "../../assets/airforce1.png";
import airjordan1 from "../../assets/airjordan1.png";

export default class Layout extends Component {
  render() {
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginRight = "250px";
      document.querySelector(".card-group").style.width = "85%";
      setTimeout(() => {
        document.querySelector(".sidenav-buttons").style.opacity = 1;
      }, 250);
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    function closeNav() {
      document.querySelector(".sidenav-buttons").style.opacity = 0;
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginRight = "0";
      document.querySelector(".card-group").style.width = "100%";
    }
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <div className="sidenav-buttons" style={{ opacity: 0 }}>
            <span className="closebtn" onClick={closeNav}>
              &times;
            </span>
            <a href=".">Sign Up</a>
            <a href=".">Login</a>
            <hr />
            <a href=".">New Arrivals</a>
            <a href=".">Featured</a>
            <hr />
            <a href=".">In Cart</a>
            <ul className="list-group">
              <SidebarItem
                item={airforce1}
                name="Nike Air Force 1"
                height="30px"
                price="RM 369.00"
              />
              <SidebarItem
                item={airjordan1}
                name="Nike Air Jordan 1"
                height="38px"
                price="RM 499.00"
              />
            </ul>
            <button className="btn btn-dark d-flex mx-auto">Checkout</button>
          </div>
        </div>

        <div id="main">
          <nav className="navbar" id="navbar">
            <div className="col-sm-3">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <span className="navbar-brand mb-0 h1 pl-5">Shoe Shop</span>
              </Link>
            </div>
            <div className="col-sm-9">
              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-2">
                  <div class="d-flex justify-content-around">
                    <Link to="/shop" style={{ textDecoration: 'none' }}>
                      <a className="navbar-link" href=".">
                        Men
                      </a>
                    </Link>
                    <Link to="/shop" style={{ textDecoration: 'none' }}>
                      <a className="navbar-link" href=".">
                        Women
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="row">
                    <div className="col-sm-7"></div>
                    <div className="col-sm-5">
                      <div className="d-flex justify-content-around pr-5">
                        <Link to="/cart" style={{ textDecoration: 'none' }}>
                          <a className="navbar-link" href=".">
                            <i class="fas fa-shopping-cart"></i>
                            &nbsp;&nbsp;Cart
                          </a>
                        </Link>
                        <span
                          onClick={openNav}
                          className="navbar-link menu-btn"
                          href="."
                        >
                          <i class="fas fa-ellipsis-v"></i>
                          &nbsp;&nbsp;Menu
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
