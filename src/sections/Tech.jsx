
import React from "react";
import SkillDataProvider from "../components/SkillDataProvider";
import SkillText from "../components/SkillText";
import {  Other_skill, Skill_data } from "../constants";
import TitleHeader from "../components/TitleHeader";


const Tech = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden mt-30 min-h-[100px]"
      style={{ transform: "scale(0.9)" }}
    >
      {/* <SkillText /> */}
      <TitleHeader
          title="My Skills"
        />

      <div className="flex flex-row justify-around flex-wrap mt-5 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      {/* <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Tech;