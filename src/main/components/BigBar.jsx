import React from 'react';

const BigBar = () => {
  const name = "Rodrigo Misael Luna Saguilan";
  const title = "Front End Developer";
  const summary = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.";
  
  return (
    <div className="fixed z-20 bottom-0 bg-blue-green w-full h-[40vh] lg:h-96">
      <div className="flex flex-col lg:flex-row mt-7 w-full justify-between px-4 lg:px-16">
        <div className="flex flex-col space-y-4 w-full lg:w-2/3">
          <p className="font-normal text-4xl sm:text-5xl lg:text-6xl text-white">{name}</p>
          <p className="font-bold text-5xl sm:text-6xl lg:text-8xl text-white">{title}</p>
          <p className="font-light text-2xl sm:text-3xl lg:text-4xl text-white">{"Resumen profesional"}</p>
        </div>
        <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
          <p className="font-light text-lg sm:text-xl text-white">{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default BigBar;
