import React from "react";
import { Button } from "../components";

const Home = () => {

  const handleEvent = () => {
    alert('Presionado')
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <div className="w-64 my-2">
        <Button variant={'basic'} text="Label del text" onClick={() => alert('Boton Basico presionado')} />
      </div>
      <div id="divider" className="flex my-2 h-1 w-full bg-white" />
      <div className="w-24 h-24 my-2">
        <Button variant={'only-icon'} iconName={'FaGithub'} sizeIcon={88} onClick={handleEvent} />
      </div>
      <div id="divider" className="flex my-2 h-1 w-full bg-white" />
      <div className="w-64 my-2">
        <Button variant="transparent" text="Label del text" />
      </div>
      <div id="divider" className="flex my-2 h-1 w-full bg-white" />
      <div className="w-64 my-2">
        <Button variant="with-icon-left" iconName={'FaGithub'} colorIcon={'#FFFFFF'} sizeIcon={32} text="Label del text" />
      </div>
      <div id="divider" className="flex my-2 h-1 w-full bg-white" />
      <div className="w-60 my-2">
        <Button
          onClick={() => alert("click")}
          variant="with-icon-right"
          text="Click me"
          iconName="FaBed"
          sizeIcon={24}
          backgroundColor="bg-red-500"
          textColor={'text-white'}
          textSize="text-xl"
        />
      </div>
    </div>
  );
};

export default Home;
