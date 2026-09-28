import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      className="w-full flex flex-col justify-center items-center gap-5 p-5 border-b border-gray-300/15"
    >
      <h1 className="text-xl font-semibold text-blue-500 text-left w-full">
        CONTACT
      </h1>
      <p className="text-white text-2xl text-left w-full">
        Let`s work together!
      </p>
      <p className="text-gray-400 text-sm w-full text-left">
        Have a project in mind or just want to say hi?
        <br />
        Fell free to reach out!
      </p>
      <a href="mailto:ukinatpr124@gmail.com" className="flex justify-center items-center gap-3 cursor-pointer w-[90%] p-3 text-white text-lg rounded-lg bg-blue-500 md:w-[50%] lg:w-[40%] mt-3">
        <MdOutlineMail />
        Get In Touch
      </a>
      <div className="w-full flex justify-center items-center gap-5">
        <a  href="https://github.com/Uk1n4tpr" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center cursor-pointer gap-5 w-[20%] p-3 text-white text-lg rounded-lg bg-[#111827]">
          <FaGithub />
        </a >
        <a  href="https://www.linkedin.com/in/uros-kljecanin-248a06280/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center cursor-pointer gap-5 w-[20%] p-3 text-white text-lg rounded-lg bg-[#111827]">
          <FaLinkedin />
        </a >
        <a  href="mailto:ukinatpr124@gmail.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center cursor-pointer gap-5 w-[20%] p-3 text-white text-lg rounded-lg bg-[#111827]">
          <MdOutlineMail />
        </a >
      </div>
    </div>
  );
}

export default Contact;
