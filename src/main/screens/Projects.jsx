import React from "react";
import { Button, Icon } from "../components";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const handleEvent = () => {
    alert('Presionado')
  }

  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Icon iconName="FaAngleRight" size={27} />
      <div id="divider" className="flex my-10 h-1 w-full bg-white" />
      <div className="w-60">
        <Button variant={'basic'} text="Label del text" onClick={() => alert('Boton Basico presionado')} />
      </div>
      <div className="w-12">
        <Button variant={'only-icon'} iconName={'FaGithub'} sizeIcon={56} onClick={handleEvent} />
      </div>
      <div className="w-60">
        <Button variant="transparent" text="Label del text"/>
      </div>
      <div className="w-60">
        <Button variant="with-icon-left" iconName={'FaGithub'} sizeIcon={12} text="Label del text" />
      </div>
      <div className="absolute bottom-2 w-60">
        <Button variant="with-icon-right" iconName={'FaGithub'} sizeIcon={16} text="Label del text" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default Home;
