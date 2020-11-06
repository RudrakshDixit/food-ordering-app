import React from "react";

function CoverImage({ cover, issmall }) {
  return (
    <div
      style={{
        marginTop: "2px",
        overflowX: "hidden",
        padding: issmall && "1.5rem",
      }}
    >
      <img
        src={cover}
        alt="cover"
        style={{ objectFit: "contain", width: "100%", zIndex: "0" }}
      />
    </div>
  );
}

export default CoverImage;
