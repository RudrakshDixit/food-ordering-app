import React from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import "../menuitem.css";
import { useStateValue } from "../StateProvider";

function MenuItem({ id, imgSrc, title, desc, price,show }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    //add to data layer
    dispatch({
      type: "ADD",
      item: {
        id: id,
        title: title,
        price: price,
        imgSrc: imgSrc,
        qty: 1,
      },
    });
    show(true);
  };

  return (
    <Grid
      item
      xs={6}
      md={3}
      style={{
        height: "100%",
        padding: ".5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Card
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div>
          <img
            src={imgSrc}
            alt="foodImage"
            style={{
              width: "100%",
              objectFit: "contain",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1
              style={{
                fontSize: "1rem",
                fontFamily: "Montserrat",
                fontWeight: "bold",
                color: "#457B9D",
                margin: ".5rem",
              }}
            >
              {title}
            </h1>
            <h1
              style={{
                fontSize: ".8rem",
                fontFamily: "Lato",
                fontWeight: "bold",
                color: "#ee6c4d",
                margin: ".5rem",
              }}
            >
              ₹{price}
            </h1>
          </div>
          <h1
            style={{
              fontSize: ".8rem",
              fontFamily: "Open Sans",
              fontWeight: "normal",
              color: "#6d6875",
              margin: ".5rem",
            }}
          >
            {desc}
          </h1>

          <button className="buttonstyle" onClick={addToBasket}>
            Add to Cart
          </button>
        </div>
      </Card>
    </Grid>
  );
}

export default MenuItem;
