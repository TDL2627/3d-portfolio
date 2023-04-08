import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { useState, useEffect } from "react";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-full row-span-2 mx-auto mt-16 bg-slate-800 ">
        <div
          className={` ${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ">
            <div className="w-5 h-5 rounded-full bg-[#1d4ed8]" />
            <div className="w-1 h-96 md:h-40 blue-gradient" />
          </div>
          <div className="mt-5">
            <h1 className={`md:text-5xl font-black md:block hidden`}>
              Hi, I'm a{" "}
              <span className="text-[#1d4ed8] ">Full Stack Web Developer</span>{" "}
            </h1>
            <h2 className={` text-2xl font-black md:hidden block`}>
              Hi, I'm a <span className="text-[#1d4ed8] ">Full Stack</span>{" "}
            </h2>
            <p className="text-[#1d4ed8] md:hidden block font-black w-full  text-2xl ">
              Web Developer
            </p>{" "}
            <div className="mt-10">
              <p>
                Experienced full stack developer skilled in building innovative
                and high-performance web applications using a wide range of web
                technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
