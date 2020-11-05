import React, { Component } from "react";

export default class SidebarItem extends Component {
  render() {
    return (
      <div>
        <li className="list-group-item">
          <div className="row">
          <div className="col-sm-4" style={{ padding: "0" }}>
            <img
              src={this.props.item}
              alt=""
              height={this.props.height}
              style={{ paddingRight: "1em" }}
            />
          </div>
          <div className="col-sm-7" style={{ padding: "0" }}>
            <p className="sidenav-item">
              {this.props.name}<br></br>
              {this.props.price}
            </p>
          </div>
          <div className="col-sm-1" style={{ padding: "0" }}>
            <i class="fas fa-times delete-icon"></i>
          </div>
          </div>
        </li>
      </div>
    );
  }
}
