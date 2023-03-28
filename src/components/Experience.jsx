import React, { useEffect, useState } from "react";
import CustomCursor from "./CustomCusor";

const Experience = () => {
  // custom pointer
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pointer, setPointer] = useState(false);

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setPointer(true);
      }}
      onMouseLeave={() => {
        setPointer(false);
      }}
      style={{ cursor: "none" }}
      className="bg-red-500 h-80 w-full text-center py-5 "
    >
      {pointer && <CustomCursor points={position} />}
      <h2 id="exp">Experience</h2>
    </div>
  );
};

export default Experience;
