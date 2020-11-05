import React, { Component } from "react";

export default class ShoeCard extends Component {
  render() {
    return (
      <div className="shoe">
        <div
          className="d-flex flex-column align-items-center"
          style={{ height: "35em" }}
        >
          <div className="shoe-img">
            <img
              src={this.props.image}
              alt=""
              style={{ height: this.props.height }}
            />
            <h3 className="shoe-name">{this.props.shoeName}</h3>
            <p className="shoe-text">{this.props.shoeText}</p>
          </div>
          <div className="mb-auto p-2 bd-highlight"></div>
          <b className="price" style={{ textShadow: "0 0 10px rgba(0,0,0,1)" }}>{this.props.price}</b>
          <div className="btn-group">
            <button className="btn btn-dark">
                Size&nbsp;&nbsp;
                <i class="fas fa-chevron-down"></i>
            </button>
            <button className="btn btn-dark">Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
