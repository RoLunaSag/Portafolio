import React from "react";
import { BgScreen, Button } from "../components";

const Projects = () => {
  return (
    <div className="relative h-screen w-screen">
            <BgScreen bgimage='bg-first-img' />
            <div className="relative z-10 flex justify-center items-center h-full">
                <p className='font-bold text-9xl text-white'>
                    {'Proyectos'}
                </p>
            </div>
        </div>
  );
};

export default Projects;
