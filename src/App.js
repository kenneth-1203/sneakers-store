import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import Shop from "./components/shop/Shop";

import "./main.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
