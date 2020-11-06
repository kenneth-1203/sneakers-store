import React, { Component } from "react";

export default class BrandCard extends Component {
  render() {
    return (
      <div className="card" style={{ width: "22rem", paddingTop: this.props.paddingTop }}>
        <div className="col-sm-12">
          <img src={this.props.image} className="card-img-top" alt="..."></img>
            <div className="d-flex flex-column" style={{ height: this.props.height }}>
              <div className="mb-auto p-2"></div>
              <div className="p-2 mx-auto">
                <button className="btn btn-dark">Shop Now</button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
