import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./Buttons";

const HeaderNavBar = () => {
  const navigate = useNavigate();

  const buttons = [
    { text: "Inicio", variant: "with-icon-left", icon: 'FaHome', eventButton: '/' },
    { text: "Proyectos", variant: "with-icon-left", icon: 'FaGithub', eventButton: '/projects' },
    { text: "Sobre Mi", variant: "with-icon-left", icon: 'FaRegUser', eventButton: '/about' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-gray-800/60">
      <div className="flex justify-around flex-row pt-5 pb-5 bg-gray-800">
        {buttons.map((button, index) => (
          <div key={index} className="h-10 w-24 lg:w-60">
            <ButtonComponent text={button.text} variant={button.variant} colorIcon={'#FFF'} sizeIcon={18} iconName={button.icon} onClick={() => navigate(button.eventButton)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderNavBar;
