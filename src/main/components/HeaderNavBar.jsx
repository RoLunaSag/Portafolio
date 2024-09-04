// NavBar.js
import React from "react";
import { useNavigate } from "react-router-dom";

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
        <button
          className="flex w-32 h-10 justify-center items-center bg-slate-600 rounded-md animate-bounce drop-shadow-md"
          onClick={() => navigate("/")}
        >
          <p className="font-bold text-base text-white">{"Sobre Mi"}</p>
        </button>
        <button
          className="flex w-32 h-10 justify-center items-center bg-slate-600 rounded-full"
          onClick={() => navigate("/projects")}
        >
          <p className="font-bold text-base text-white">{"Proyectos"}</p>
        </button>
        <button
          className="flex w-32 h-10 justify-center items-center bg-slate-600 rounded-full"
          onClick={() =>
            (window.location.href =
              "https://github.com/RoLunaSag?tab=repositories")
          }
        >
          <p className="font-bold text-base text-white">{"Mi GitHub"}</p>
        </button>
      </div>
    </div>
  );
};

export default HeaderNavBar;
