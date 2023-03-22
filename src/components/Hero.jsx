import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <>
      <section className="relative w-full h-screen mx-auto mt-20">
        <div
          className={` ${styles.paddingX} absolute inset-0 top-[20px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
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
              Hi, I'm a{" "}
              <span className="text-[#1d4ed8] ">Full Stack</span>{" "}

            </h2>
            <p className="text-[#1d4ed8] font-black w-full  text-2xl ">Web Developer</p>{" "}
            <div className="mt-10">
            <p>I make websites and games</p>
            <p>I can do anything</p>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
