import React, { useState } from "react";

const CustomCursor = (props) => {
  const { points } = props;
  return (
    <div
      className="custom-cursor "
        style={{ left: points.x, top: points.y }}
    >
      <div className="custom-cursor-inner  ">
        <p className="text-black">Drag </p>
      </div>
    </div>
  );
};

export default CustomCursor;
