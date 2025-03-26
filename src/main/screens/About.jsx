import React from "react";
import { BgScreen, HeaderNavBar } from "../components";
import jobswork from "../utils/jobs.json";

const About = () => {
  return (
    <div className="relative min-h-screen w-screen flex flex-col">
      <BgScreen bgimage="bg-first-img" />
      <HeaderNavBar />

      <div className="relative z-30 flex flex-col items-center px-6 pt-24 pb-20 space-y-10 w-full overflow-y-auto">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide text-center drop-shadow-lg">
          {"Sobre Mí"}
        </h1>
        <p className="text-white text-lg md:text-xl max-w-3xl text-center">
          {"Soy un desarrollador frontend con experiencia en aplicaciones web y móviles, enfocado en buenas prácticas, código limpio y la creación de interfaces intuitivas. 🚀"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {jobswork.map((job) => (
            <div
              key={job.id}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-web-600 p-6 shadow-lg hover:scale-[1.02] transition-all"
            >
              <h3 className="text-white text-xl font-semibold">{job.position}</h3>
              <p className="text-blue-300 text-sm">{job.name} - {job.location}</p>
              <p className="text-gray-300 text-sm mb-2">{job.time}</p>
              <p className="text-gray-200 text-base">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
