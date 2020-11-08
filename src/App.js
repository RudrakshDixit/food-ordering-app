import React from "react";
import "./App.css";
import Cart from "../src/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Analytics from "./Analytics";
import Money from "./Money";
import Help from "./Help";

//https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557
import Home from "../src/components/Home";
import Checkout from "./Checkout";
import Status from "./Status";
import NotFound from "./components/404";
import Admin from "./Admin";
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/status" component={Status} />
        <Route path="/admin" component={Admin} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/help" component={Help} />
        <Route path="/earnings" component={Money} />

        <Route  component={NotFound} />
      </Switch>
    </Router> 
  );
}

export default App;
