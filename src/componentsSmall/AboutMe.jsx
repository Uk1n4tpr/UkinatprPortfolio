import React from "react";
import profilePic from "../assets/profilePic.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

function AboutMe() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row lg:flex-row items-center justify-center w-full gap-5 p-5 border-b border-gray-300/15"
    >
      <div className="w-full flex justify-center items-center my-5">
        <div className="flex flex-col justify-center items-center w-[40%]">
          <h1 className="text-lg text-blue-500 text-left w-full">ABOUT ME</h1>
          <h2 className="text-white text-2xl w-full text-left">Who am I?</h2>
          <p className="text-gray-400 text-left w-full">
            I am a passionate web developer with experience in creating modern,
            responsive websites and applications. I enjoy solving problems and
            creating efficient, scalable solutions.
          </p>
        </div>
        <div className="w-[60%] h-full flex justify-center items-center p-5">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-[90%] bg-[#111827] flex flex-col justify-center items-center gap-3 border border-gray-400/25 rounded-lg p-5">
        <div className="flex justify-center items-center w-full px-3 gap-3">
          <div className="flex w-[20%]">
            <IoLocationOutline size={40} className="text-blue-500" />
          </div>
          <div className="flex flex-col justify-center items-start w-[80%]">
            <h1 className="text-blue-500 text-lg">Location</h1>
            <p className="text-white text-sm">
              Banja Luka, Bosnia and Herzegovina
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full px-3 gap-3">
          <div className="flex w-[20%]">
            <MdOutlineMail size={40} className="text-blue-500" />
          </div>
          <div className="flex flex-col justify-center items-start w-[80%]">
            <h1 className="text-blue-500 text-lg">Email</h1>
            <p className="text-white text-sm">ukinatpr124@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full px-3 gap-3">
          <div className="flex w-[20%]">
            <IoBriefcaseOutline size={40} className="text-blue-500" />
          </div>
          <div className="flex flex-col justify-center items-start w-[80%]">
            <h1 className="text-blue-500 text-lg">Availability</h1>
            <p className="text-white text-sm">
              Available for new opportunities
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full px-3 gap-3">
          <div className="flex w-[20%]">
            <CiGlobe size={40} className="text-blue-500" />
          </div>
          <div className="flex flex-col justify-center items-start w-[80%]">
            <h1 className="text-blue-500 text-lg">Languages</h1>
            <p className="text-white text-sm">
              Serbian (native), English (Fluent)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
