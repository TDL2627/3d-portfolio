import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "../constants";

import "react-vertical-timeline-component/style.min.css";
const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-auto object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-bold ">{experience.title}</h3>
      </div>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <div id="Experience" className="h-screen pt-20 bg-slate-800 ">
      <h2
        data-aos="fade-up"
        className="md:text-5xl font-black text-center uppercase"
      >
        Experience
      </h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard experience={exp}></ExperienceCard>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
