import React from "react";
import { BgScreen, HeaderNavBar, ProjectBox } from "../components";
import { motion } from "framer-motion";
import ProjectJson from '../utils/projects.json'

const Projects = () => {
  return (
    <div className="flex relative h-screen w-screen">
      <BgScreen bgimage='bg-second-img' />
      <HeaderNavBar />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col w-screen mb-14">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-6 pt-24">
          {ProjectJson.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={index} className="py-2">
              <ProjectBox
                images={item.images}
                onClick={() => (window.location.href = item.repourl)}
                title={item.title}
                descr={item.descr}
                withRepo={!!item.repourl}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
