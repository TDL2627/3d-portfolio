import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="w-full">
      <motion.div
        className="w-full  green-pink-gradient p-1 rounded-md shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div className="bg-tertiary rounded-lg py-5 px-12 min-h-[250px] shadow-card flex justify-evenly items-center flex-col">
          <p className="md:text-[20px] font-bold ">{title}</p>
          <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <div id="About" className="h-max md:pt-20 md:pb-10 bg-slate-600 p-5 md:px-20">
      <h2
        data-aos="fade-up"
        className="md:text-5xl font-black text-center mb-10"
      >
        About
      </h2>
      <p className="leading-relaxed">
        As a full stack junior developer, I have a passion for creating
        efficient and user-friendly web applications. With a strong foundation
        in both front-end and back-end development, I am able to tackle projects
        from start to finish with ease. My skills in HTML, CSS, and JavaScript
        allow me to craft engaging and responsive interfaces, while my knowledge
        of popular back-end frameworks such as Node.js and Django enable me to
        build robust server-side functionality. With experience in database
        design and management, I am able to optimize application performance and
        ensure smooth data integration. As a quick learner and adaptable team
        player, I am always eager to take on new challenges and contribute to
        the success of any project.
      </p>
      <div className="mt-20 grid w-full md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard index={index} key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
