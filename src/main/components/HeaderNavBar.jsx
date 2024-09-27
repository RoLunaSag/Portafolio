import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./Buttons";

const HeaderNavBar = () => {
  const navigate = useNavigate();

  const buttons = [
    { text: "Inicio", variant: "transparent", eventButton: '/'},
    { text: "Proyectos", variant: "transparent", eventButton: '/projects'},
    { text: "Sobre Mi", variant: "transparent", eventButton: '/about'},
  ];

  return (
    <div className="fixed inset-0 z-20 top-5 min-w-full">
      <div className="flex justify-around flex-row">
        {buttons.map((button, index) => (
          <div key={index} className="h-10 w-24 lg:w-60">
            <ButtonComponent text={button.text} variant={button.variant} onClick={() => navigate(button.eventButton)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderNavBar;
