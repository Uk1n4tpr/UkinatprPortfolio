import React from "react";
import ProjectCard from "./ProjectCard";
import profilePic from "../assets/profilePic.png";
import PhisioRoom from "../assets/PhisioRoom.png";
import SveNaKlik from "../assets/SveNaKlik.png";
import ClikItDontMissIt from "../assets/ClikItDontMissIt.png";
import hoMed from "../assets/hoMed.png";
import LicExTr from "../assets/LicExTr.jpg";

function Projects() {
  const projects = [
    {
      picUrl: PhisioRoom,
      projectTitle: "PhisioRoom",
      projectDescription: "This is a web application for managing physiotherapy sessions. It allows users to book appointments without overlapping, view available time slots, and manage their sessions efficiently.",
      projectTehnologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      picUrl: SveNaKlik,
      projectTitle: "SveNaKlik",
      projectDescription: "This is a web store application that allows users to browse and purchase products online. It features a user-friendly interface, secure payment options, and a seamless shopping experience.",
      projectTehnologies: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    },
    {
      picUrl: ClikItDontMissIt,
      projectTitle: "ClikItDontMissIt",
      projectDescription: "This is a web application for events. It allows users to take pictures or upload them from their gallery and share them with others.",
      projectTehnologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    },
    {
      picUrl: hoMed,
      projectTitle: "hoMed",
      projectDescription: "This is a web application for medical staff and patients. It helps medical staff to find patients in need of help and patients to find medical staff in their area.",
      projectTehnologies: ["React Native", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
    {
      picUrl: LicExTr,
      projectTitle: "LicenceExpirationTracker",
      projectDescription: "This is a web application for managing license and certification dates of expiration. It is color coded to show the status of the license or certification and alerts users when the expiration date is approaching.",
      projectTehnologies: ["Electron", "JavaScript", "CSS", "postgreSQL"],
    },
  ];
  return (
    <div
      id="projects"
      className="w-full flex flex-col justify-center items-center gap-5 p-5 border-b border-gray-300/15"
    >
      <h1 className="text-xl font-semibold text-blue-500 text-left w-full">
        PROJECTS
      </h1>
      <p className="text-white text-2xl text-left w-full">
        Some things I've worked on:
      </p>
      <div className="w-full flex flex-wrap justify-center items-center gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            picUrl={project.picUrl}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            projectTehnologies={project.projectTehnologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
