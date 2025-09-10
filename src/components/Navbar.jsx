import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/bl.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDropDownOpen, setDropDownOpen] = useState(false);

  const mouseEnterHandle = () => {
    setDropDownOpen(!isDropDownOpen);
  };

  return (
    <nav className="w-full bg-white shadow-sm z-10 sticky top-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8">
        <div className="flex flex-row items-center gap-3">
          <Link to={"/"}>
            <img className="main_image h-12 w-auto" src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="flex flex-row gap-2 md:gap-4 mt-4 md:mt-0">
          <li>
            <Link
              className="px-5 py-2 rounded-full font-bold text-black hover:bg-[#FF6600] hover:text-white transition-all duration-200 text-base"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 rounded-full font-bold text-black hover:bg-[#FF6600] hover:text-white transition-all duration-200 text-base"
              to={"/aboutUs"}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="px-5 py-2 rounded-full font-bold text-black hover:bg-[#FF6600] hover:text-white transition-all duration-200 text-base"
              to={"/contactUs"}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
