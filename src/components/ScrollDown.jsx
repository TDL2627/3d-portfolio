import React from "react";
import { motion } from "framer-motion";


const ScollDown = () => {
    const scrollToElement = () => {
        const element = document.getElementById("About");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
  return (
    <div  className="absolute  bottom-10  left-[45%] justify-center items-center">
      <button onClick={scrollToElement}>
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          />
        </div>
      </button>
    </div>
  );
};

export default ScollDown;
