import React, { useState, useEffect } from 'react';
import { BgScreen, BigBar, BottomBar, HeaderNavBar } from '../components';
import homelanderImage from '../assets/images/homelander.png';

const Home = () => {
  const [dropBottomBar, setDropBottomBar] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600)
    const timertwo = setTimeout(() => setDropBottomBar(true), 100)
    return () => clearTimeout(timer, timertwo);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-y-auto">
      <BgScreen bgimage="bg-first-img" />
      <HeaderNavBar />
      <div className="relative z-0 flex justify-center items-center h-full">
        <img
          src={homelanderImage}
          alt="Homelander"
          className={`mb-32 lg:mb-72 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[640px] w-auto transition-transform duration-300 ease-in-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-80 opacity-0'}`}
        />
      </div>
      <BigBar isVisible={dropBottomBar} />
      <BottomBar />
    </div>
  );
};

export default Home;
