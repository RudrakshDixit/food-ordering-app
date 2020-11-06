import React from "react";
import "../header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FoodLogo from "../images/food_logo.jpg";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import {getCartLength } from "../reducer";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="left-header">
          <img src={FoodLogo} alt="Food Logo" className="logo-image" />
          <div style={{ marginLeft: "1rem" }}>RD Foods</div>
        </div>
      </Link>
    <div style={{display:"flex"}}>
      <Link to="/status" style={{textDecoration:"none"}}>
        <div style={{marginRight:"2rem",fontSize:"1rem", marginTop:"1rem", color:"white", fontFamily:"Roboto"}}>Order Status</div>
        </Link>
    <Link to="/cart" style={{ textDecoration: "none" }}>
        <div className="right-header-flex">
          <ShoppingCartIcon
            style={{
              color: "#f1faee",
              marginTop: ".8rem",
              marginBottom: ".8rem",
              fontSize: "1.8rem",
            }}
          />
          <div className="header-cart-value">{getCartLength(basket)}</div>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default Header;
