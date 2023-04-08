import React, { useState } from "react";

const CustomCursor = (props) => {
  const { points, text } = props;
  return (
    <div
      className="custom-cursor "
        style={{ left: points.x, top: points.y }}
    >
      <div className="custom-cursor-inner  ">
        <p className="text-white">{text} </p>
      </div>
    </div>
  );
};

export default CustomCursor;
