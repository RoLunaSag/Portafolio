import React from "react";
import { BgScreen, HeaderNavBar } from "../components";
import jobswork from "../utils/jobs.json";

const About = () => {

  const arrayJobs = jobswork[0].jobs;

  return (
    <div className="flex relative h-screen w-screen">
      <BgScreen bgimage="bg-first-img" />
      <HeaderNavBar />
      <div className="flex flex-col items-center space-y-5 w-screen mt-[61px] mb-14 overflow-y-auto">
        <div className="w-11/12 mx-5 mt-3 h-1 bg-blue-web-600 rounded-full" />
        <div className="flex flex-col">
          <p className="font-normal text-base md:text-2xl text-black">{"FLDSMDFR"}</p>
        </div>
        <div className="w-11/12 mx-5 h-1 bg-blue-web-600 rounded-full" />
        <div className="flex flex-col w-11/12 my-2 mx-2 md:mx-5 border-4 border-blue-web-600 px-5 py-2 rounded-lg ">
          <p className="font-bold text-2xl md:text-5xl text-black">{jobswork.title}</p>
          {arrayJobs.map((itemtwo, indextwo) => (
            <div key={indextwo} className="flex flex-col">
              <p className="font-normal text-base md:text-2xl text-black">{itemtwo.name}</p>
            </div>
          ))}
        </div>
        <div className="w-11/12 mx-5 h-1 bg-blue-web-600 rounded-full" />
      </div>
    </div>
  );
};

export default About;
