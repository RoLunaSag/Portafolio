import React from 'react';
import PropTypes from 'prop-types';

const BigBar = ({ isVisible }) => {
  const name = "Rodrigo Misael Luna Saguilan";
  const title = "Front End Developer";
  const summary = "Desarrollador Front-End con 5 años de experiencia en aplicaciones móviles y web. Especializado en React, React Native, JavaScript y TypeScript. Amplia experiencia en el uso de librerías CSS y herramientas como GitHub, Bitbucket, Jira y Trello para la gestión de proyectos ágiles y colaborativos.";

  return (
    <div className={`fixed z-20 bottom-0 bg-blue-green w-full h-[40vh] lg:h-96 overflow-y-auto transition-transform duration-700 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
      <div className="flex flex-col lg:flex-row mt-7 w-full justify-between px-4 lg:px-16">
        <div className="flex flex-col space-y-4 w-full lg:w-2/3">
          <p className="font-normal text-4xl sm:text-5xl lg:text-6xl text-white">{name}</p>
          <p className="font-bold text-5xl sm:text-6xl lg:text-8xl text-white">{title}</p>
          <p className="font-light text-2xl sm:text-3xl lg:text-4xl text-white">{"Resumen profesional"}</p>
        </div>
        <div className="w-full lg:w-1/3 mt-4 lg:mt-0 space-y-5">
          <p className="font-normal text-lg sm:text-xl text-white">{summary}</p>
        </div>
      </div>
    </div>
  );
};

BigBar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
}

export default BigBar;
