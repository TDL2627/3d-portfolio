import React from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Skills = () => {
  return (
    <div id="Skills" className="h-screen pt-20 bg-slate-800 ">
      <h2 className="md:text-5xl font-black text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((tech, index) => (
          <div className="w-20 h-20" key={`tech ${index}`}>
            <BallCanvas icon={tech.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
