import React from "react";

function Title({ title }) {
  return (
    <div>
      <h1
        style={{
          marginLeft: "1.5rem",
          marginTop: "1rem",
          marginBottom: ".2rem",
          fontFamily: "Open Sans",
          color: "#1D3557",
          fontSize: "1.5rem",
        }}
      >
        {title}
      </h1>
      <div
        style={{
          border: "2px solid #E63946",
          marginLeft: "1.5rem",
          borderRadius: "24px",
          marginRight: "1.5rem",
        }}
      ></div>
    </div>
  );
}

export default Title;
