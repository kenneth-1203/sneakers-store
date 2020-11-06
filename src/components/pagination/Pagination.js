import React, { Component } from "react";

export default class Pagination extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="btn btn-dark" href=".">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="btn btn-dark" href=".">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="btn btn-dark" href=".">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="btn btn-dark" href=".">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="btn btn-dark" href=".">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
