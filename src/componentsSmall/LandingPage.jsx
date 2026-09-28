import React from "react";
import { MdFileDownload } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import CV from "../assets/UrosKljecanin.pdf";
import profilePic from "../assets/profilePic.png";

function LandingPage() {
  return (
    <div className="w-full flex justify-between items-start md:items-center lg:items-center border-b border-gray-300/15">
      <div
        id="home"
        className="flex flex-col items-center justify-center w-full text-white pt-15 border-b border-gray-300/15 "
      >
        <div className="flex flex-col justify-center items-start w-full gap-3 p-5">
          <p className="text-md text-blue-500 text-left w-full">
            Hi, my name is
          </p>
          <p className="text-3xl font-semibold text-left w-full">
            Uroš Klječanin
          </p>
          <h1 className="text-xl text-left w-[80%]">
            I build modern web applications with
            <span className="text-blue-500 font-bold">
              {" "}
              modern design
            </span>, <span className="text-blue-500 font-bold">
              clean code
            </span>{" "}
            and great{" "}
            <span className="text-blue-500 font-bold">user experience.</span>
          </h1>
        </div>
        <a
          href="#projects"
          className="flex justify-center items-center gap-3 cursor-pointer w-[90%] p-3 text-white text-lg rounded-lg bg-blue-500 md:w-[50%] lg:w-[40%] mt-3"
        >
          View My Work <IoIosArrowForward />
        </a>
        <a
          className="flex justify-center items-center gap-3 cursor-pointer w-[90%] p-3 text-white text-lg rounded-lg border border-gray-400 mt-3 md:w-[50%] lg:w-[40%]"
          href={CV}
          download
        >
          Download CV <MdFileDownload />{" "}
        </a>
        <div className="flex justify-center items-center gap-3 my-5">
          <div className="flex flex-col justify-center items-center flex-1">
            <h1 className="text-center text-2xl text-white">5+</h1>
            <p className="text-center text-md text-gray-400">
              Years of Experience
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-1">
            <h1 className="text-center text-2xl text-white">10+</h1>
            <p className="text-center text-md text-gray-400">
              Projects Completed
            </p>
          </div>
          <div className="flex flex-col justify-center items-center flex-1">
            <h1 className="text-center text-2xl text-white">100%</h1>
            <p className="text-center text-md text-gray-400">Commitment</p>
          </div>
        </div>
      </div>
      <div className="hidden justify-center items-center h-full">
        <img
          src={profilePic}
          alt="Landing"
          className="w-[80%] h-50"
        />
      </div>
    </div>
  );
}

export default LandingPage;
