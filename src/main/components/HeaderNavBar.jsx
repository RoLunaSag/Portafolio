// NavBar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "./Buttons";

const HeaderNavBar = () => {
  const navigate = useNavigate();
  const imageurl =
    "https://i.etsystatic.com/52665446/r/il/8a5ad2/6030744942/il_fullxfull.6030744942_ehq1.jpg";
  return (
    <div className="flex flex-col justify-between bg-sky-950 h-72">
      <div>
        <img
          className="h-44 border-2 border-black rounded-lg mx-5 my-5"
          src={imageurl}
          alt="myfaceimage"
        />
      </div>
      <div className="flex flex-row justify-around items-end mb-2">
        <div className="w-40 h-14">
          <ButtonComponent
            onClick={() => navigate("/")}
            variant="transparent" text="Sobre Mi"
          />
        </div>
        <div className="w-40 h-14">
          <ButtonComponent
            onClick={() => navigate("/projects")}
            variant="transparent" text="Proyectos"
          />
        </div>
        <div className="w-40 h-14">
          <ButtonComponent
            onClick={() =>
            (window.location.href =
              "https://github.com/RoLunaSag?tab=repositories")}
            variant="transparent" text="Mi GitHub"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavBar;
