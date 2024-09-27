import React from "react";
import { BgScreen, BottomBar, HeaderNavBar, ProjectBox } from "../components";
import { motion } from "framer-motion";
import ProjectJson from '../utils/projects.json'

const Projects = () => {
  return (

    <div
      className="flex relative h-screen w-screen">
      <BgScreen bgimage='bg-first-img' />
      <HeaderNavBar />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col w-screen mt-16 mb-14 z-30 overflow-y-auto">
        <div className="flex flex-col z-30 mb-0 md:mb-5">
          <p className="font-bold ml-10 z-30 text-2xl md:text-6xl text-white">
            {"FrontEnd - Web"}
          </p>
          <div className="w-11/12 h-1 bg-white rounded-full mt-3 ml-5 md:ml-10 z-30" />
          <div className="relative flex flex-wrap justify-around items-center lg:mt-0 h-[calc(100%-2rem)] 
                      space-y-10 md:space-y-20 md:space-x-10 px-5 md:px-10">
            {ProjectJson.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={index} className="z-30 mx-auto md:mx-5 w-full mt-5 md:w-auto">
                <ProjectBox
                  image={item.image}
                  onClick={() => (window.location.href = item.repourl)}
                  title={item.title}
                  descr={item.descr}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col z-30 mb-0 md:mb-5 mt-10 md:mt-5">
          <p className="font-bold ml-10 z-30 text-2xl md:text-6xl text-white">
            {"FrontEnd - Mobile"}
          </p>
          <div className="w-11/12 h-1 bg-white rounded-full mt-3 ml-5 md:ml-10 z-30" />
          <div className="relative flex flex-wrap justify-around items-center lg:mt-0 h-[calc(100%-2rem)] 
                      space-y-10 md:space-y-20 md:space-x-10 px-5 md:px-10">
            {ProjectJson.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={index} className="z-30 mx-auto md:mx-5 w-full mt-5 md:w-auto">
                <ProjectBox
                  image={item.image}
                  onClick={() => (window.location.href = item.repourl)}
                  title={item.title}
                  descr={item.descr}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <BottomBar />
    </div>
  );
};

export default Projects;
