import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa";

const DropContainer = ({ children, label, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className={`${className} inline-block cursor-pointer rounded-lg bg-gray-700`}>
      <div
        className="flex flex-row justify-between items-center m-5"
        onClick={toggleDropdown}
      >
        <p className="text-white font-semibold text-lg w-9/12">{label}</p>
        <FaChevronRight
          size={32}
          color="#FFF"
          className={`transform transition-transform duration-300 mr-5 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div>
      {isOpen && <div className="flex min-h-1 m-5">{children}</div>}
    </div>
  );
};

DropContainer.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DropContainer;
