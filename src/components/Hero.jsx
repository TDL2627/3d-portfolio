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
          <div>
            <h1 className={` ${styles.heroHeadText}`}>
              Hi, I'm a{" "}
              <span className="text-[#1d4ed8]">Full Stack Web Developer</span>{" "}
            </h1>
            <p>I make websites and games</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
