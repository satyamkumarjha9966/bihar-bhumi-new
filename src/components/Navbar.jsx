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
    <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between mx-2 md:mx-16 items-center py-4">
      <div className="flex flex-row items-center justify-start">
        <div>
          <Link to={"/"}>
            <img className="main_image" src={logo}></img>
          </Link>
        </div>
        {/* <div className="btn">
          <Link to={"/signup"}>
            <Button text={"Signup"} />
          </Link>
          <Link to={"/login"}>
            <Button text={"Login"} />
          </Link>
        </div> */}
      </div>

      <div className="link_container">
        <ul className="navbar_link">
          <li className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out py-2 px-4 rounded-md shadow-md">
            <Link
              className="link text-sm md:text-[16px] gap-2 md:gap-16"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out py-2 px-4 rounded-md shadow-md">
            <Link
              className="link text-sm md:text-[16px] gap-2 md:gap-16"
              to={"/aboutUs"}
            >
              About Us
            </Link>
          </li>
          <li className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out py-2 px-4 rounded-md shadow-md">
            <Link
              className="link text-sm md:text-[16px] gap-2 md:gap-16"
              to={"/contactUs"}
            >
              Contact Us
            </Link>
          </li>
          {/* <li
            onClick={mouseEnterHandle}
            className="bg-black py-2 px-4 rounded-md shadow-md"
          >
            <div>
              <Link className="link text-sm md:text-[16px] gap-2 md:gap-16">
                Services
              </Link>
            </div>
            {isDropDownOpen ? (
              <div className="">
                <ul className="drop_down_link">
                  <li className="border-b-[1px] border-gray-50">
                    <Link className="link" to={"#"}>
                      Ragistration
                    </Link>
                  </li>
                  <li className="border-b-[1px] border-gray-50">
                    <Link className="link" to={"#"}>
                      EPF & MP ACT
                    </Link>
                  </li>
                  <li className="border-b-[1px] border-gray-50">
                    <Link className="link" to={"#"}>
                      LABOUR, WELFARE ACT
                    </Link>
                  </li>
                  <li className="border-b-[1px] border-gray-50">
                    <Link className="link" to={"#"}>
                      MINIMUM WAGES ACT
                    </Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
