import React, { Component } from "react";

import Navbar from "../layout/Navbar";

import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import paypal from "../../assets/paypal.png";
import airforce1 from "../../assets/airforce1.png";
import airjordan1 from "../../assets/airjordan1.png";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content">
          <div className="d-flex justify-content-center">
            <div className="col-sm-12">
              <div className="cart-group">
                <div className="row">
                  <div className="col-sm-4 pr-0">
                    <div className="payment-content">
                      <div className="row pl-2">
                        <div className="col-sm-7">
                          <h3 className="payment-title">Payment</h3>
                        </div>
                        <div className="col-sm-5">
                        <div className="row" style={{ paddingTop: "1.8em" }}>
                          <img className="px-1" src={mastercard} height="25px" alt=""/>
                          <img className="px-1" src={visa} height="25px" alt=""/>
                          <img className="px-1" src={paypal} height="25px" style={{ paddingTop: "1px" }} alt=""/>
                        </div>
                        </div>
                      </div>
                      <form className="payment-form">
                        <div className="form-group">
                          <label>Name on card</label>
                          <input type="text" className="form-control" style={{ width: "90%" }}></input>
                        </div>
                        <div className="form-group">
                          <label>Card number</label>
                          <div className="row" style={{ width: "98%" }}>
                            <div className="col-sm-3">
                              <input type="text" className="form-control" style={{ width: "100%" }}></input>
                            </div>
                            <div className="col-sm-3">
                              <input type="text" className="form-control" style={{ width: "100%" }}></input>
                            </div>
                            <div className="col-sm-3">
                              <input type="text" className="form-control" style={{ width: "100%" }}></input>
                            </div>
                            <div className="col-sm-3">
                              <input type="text" className="form-control" style={{ width: "100%" }}></input>
                            </div>
                          </div>
                        </div>
                        <div className="row" style={{ width: "360px" }}>
                          <div className="col-sm-3 pr-2">
                            <div className="form-group">
                              <label>CVV</label>
                              <input type="text" className="form-control" style={{ width: "80%" }}></input>
                            </div>
                          </div>
                        <div className="col-sm-2 p-0">
                          <div className="form-group">
                            <label>MM</label>
                            <input type="text" className="form-control" style={{ width: "60%" }}></input>
                          </div>
                        </div>
                        <div className="col-sm-2 p-0">
                          <div className="form-group">
                            <label>DD</label>
                            <input type="text" className="form-control" style={{ width: "60%" }}></input>
                          </div>
                        </div>
                        </div>
                      </form>
                      <hr/>
                      <form className="payment-form">
                        <div className="row" style={{ width: "98%" }}>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>First Name</label>
                              <input type="text" className="form-control" style={{ width: "100%" }}></input>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Last Name</label>
                              <input type="text" className="form-control" style={{ width: "100%" }}></input>
                            </div>
                          </div>
                        </div>
                        <div className="row" style={{ width: "98%" }}>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Contact Number</label>
                              <input type="text" className="form-control" style={{ width: "100%" }}></input>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <label>Country</label>
                              <input type="text" className="form-control" style={{ width: "100%" }}></input>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <input type="text" className="form-control" style={{ width: "90%" }}></input>
                        </div>
                        <div className="row" style={{ width: "90%" }}>
                          <div className="col-sm-3">
                            <div className="form-group">
                              <label>Postal</label>
                              <input type="text" className="form-control" style={{ width: "110%" }}></input>
                            </div>
                          </div>
                          <div className="col-sm-5">
                            <div className="form-group">
                              <label>State</label>
                              <input type="text" className="form-control" style={{ width: "100%" }}></input>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-group">
                              <label>City</label>
                              <input type="text" className="form-control" style={{ width: "135%" }}></input>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-sm-8 pl-0">
                    <div className="cart-content">
                      <h3 className="cart-title">In Cart</h3>
                      <ul className="list-group pl-5">
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="row">
                                <div>
                                <i class="fas fa-times fa-lg cart-item-icon pr-4"></i>
                                </div>
                                <img src={airforce1} height="70px" alt=""/>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <h3 className="cart-item-name">Nike Air Force 1</h3>
                              <div className="cart-item-text">Size: UK 43</div>
                              <div className="cart-item-text">Qty: 1</div>
                            </div>
                            <div className="col-sm-3">
                              <h3 className="float-right cart-item-price">RM 369.00</h3>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-sm-3">
                            <div className="row">
                                <div>
                                <i class="fas fa-times fa-lg cart-item-icon pr-4"></i>
                                </div>
                                <img src={airjordan1} height="85px" alt=""/>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <h3 className="cart-item-name">Nike Air Jordan 1 Retro High OG</h3>
                              <div className="cart-item-text">Size: UK 42</div>
                              <div className="cart-item-text">Qty: 1</div>
                            </div>
                            <div className="col-sm-3">
                              <h3 className="float-right cart-item-price">RM 499.00</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <hr/>
                      <div className="row pl-5">
                        <div className="col-sm-9">
                          <h3 className="cart-subtitle py-0">Subtotal</h3>
                        </div>
                        <div className="col-sm-3">
                          <div className="cart-subtitle p-0 float-right pr-5">RM 869.00</div>
                        </div>
                      </div>
                      <div className="row pl-5">
                        <div className="col-sm-9">
                          <h3 className="cart-subtitle py-0">Discount (20% FROM COUPON)</h3>
                        </div>
                        <div className="col-sm-3">
                          <div className="cart-subtitle p-0 float-right pr-5">-RM 173.80</div>
                        </div>
                      </div>
                      <div className="row pl-5">
                        <div className="col-sm-9">
                          <h3 className="cart-subtitle py-0">Delivery Fees (West Malaysia)</h3>
                        </div>
                        <div className="col-sm-3">
                          <div className="cart-subtitle p-0 float-right pr-5">RM 13.00</div>
                        </div>
                      </div>
                      <div className="row pl-5">
                        <div className="col-sm-9">
                          <h3 className="cart-subtitle py-0">Rounding Adjustments</h3>
                        </div>
                        <div className="col-sm-3">
                          <div className="cart-subtitle p-0 float-right pr-5">-RM 0.00</div>
                        </div>
                      </div>
                      <div className="row pl-5">
                        <div className="col-sm-8">
                          <h3 className="cart-title p-0 pt-2 pl-3">Total</h3>
                        </div>
                        <div className="col-sm-4">
                          <div className="cart-title p-0 float-right pr-5">RM 708.20</div>
                        </div>
                      </div>
                      <button className="float-right mr-5 my-3 btn btn-dark">CONFIRM & PAY</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
