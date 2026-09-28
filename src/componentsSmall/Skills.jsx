import React from "react";
import SkillsCard from "./SkillsCard";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTailwindcss,
  SiBootstrap,
  SiLinux,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiGithubBadge } from "react-icons/di";

function Skills() {
  const skills = [
    { skillName: "HTML", skillIcon: AiFillHtml5, skillColor: "#E84913" },
    { skillName: "CSS", skillIcon: DiCss3, skillColor: "#264DE4" },
    { skillName: "JavaScript", skillIcon: SiJavascript, skillColor: "#F7DF1E" },
    { skillName: "React", skillIcon: FaReact, skillColor: "#61DAFB" },
    { skillName: "Node.js", skillIcon: FaNodeJs, skillColor: "#339933" },
    { skillName: "Express.js", skillIcon: SiExpress, skillColor: "#000000" },
    { skillName: "MongoDB", skillIcon: SiMongodb, skillColor: "#47A248" },
    { skillName: "MySQL", skillIcon: GrMysql, skillColor: "#4479A1" },
    { skillName: "Python", skillIcon: SiPython, skillColor: "#3776AB" },
    { skillName: "GitHub", skillIcon: DiGithubBadge, skillColor: "#181717" },
    {
      skillName: "Tailwind CSS",
      skillIcon: SiTailwindcss,
      skillColor: "#38BDF8",
    },
    { skillName: "Bootstrap", skillIcon: SiBootstrap, skillColor: "#7952B3" },
    { skillName: "Linux", skillIcon: SiLinux, skillColor: "#FCC624" },
  ];
  return (
    <div
      id="skills"
      className="w-full flex flex-col justify-center items-center gap-5 p-5 border-b border-gray-300/15"
    >
      <h1 className="text-xl font-semibold text-blue-500 text-left w-full">
        SKILLS
      </h1>
      <p className="text-white text-2xl text-left w-full">
        My skills and technologies I work with:
      </p>
      <div className="w-full flex flex-row flex-wrap justify-center items-center gap-5">
        {skills.map((skill, index) => (
          <SkillsCard
            key={index}
            skillName={skill.skillName}
            skillIcon={skill.skillIcon}
            skillColor={skill.skillColor}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
