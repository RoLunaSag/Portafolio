import React from 'react';
import { BgScreen, BigBar } from '../components';
import homelanderImage from '../assets/images/homelander.png';

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-y-auto">
      <BgScreen bgimage="bg-first-img" />
      <div className="relative z-0 flex justify-center items-center h-full">
        <img 
          src={homelanderImage} 
          alt="Homelander" 
          className="mb-32 lg:mb-72 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] w-auto" 
        />
      </div>
      <BigBar />
    </div>
  );
};

export default Home;
