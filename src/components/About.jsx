import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <div id="About" className="h-screen pt-20 bg-slate-600 ">
      <h2 data-aos="fade-up" className="md:text-5xl font-black text-center">About</h2>
      <p>
        Experienced full stack developer skilled in building innovative and
        high-performance web applications using a wide range of web
        technologies.
      </p>
    </div>
  );
};

export default About;
