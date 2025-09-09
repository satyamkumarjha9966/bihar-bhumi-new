import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 py-11 px-6 md:px-24 text-white">
      {/* // Data Container  */}
      <div className="flex flex-col md:flex-row gap-11">
        {/* // Company Content */}
        <div className="md:w-[30%]">
          <h4 className="text-2xl font-medium">About Us</h4>
          <div className="h-1 bg-green-600 rounded-3xl w-20 mt-2 mb-4"></div>
          <h2 className="text-justify text-white">
            Explore Bihar's Revenue and Land Reforms Department effortlessly
            with our user-friendly third-party website. Access vital services,
            submit applications, and track progress seamlessly for efficient
            land-related transactions. Simplifying interactions and enhancing
            transparency for citizens and stakeholders alike.
          </h2>
        </div>
        {/* // Quick Link  */}
        <div className="md:w-[30%] md:ml-24">
          <h4 className="text-2xl font-medium">Quick Links</h4>
          <div className="h-1 bg-green-600 rounded-3xl w-20 mt-2 mb-4"></div>
          <ul className="flex flex-col gap-2 text-white">
            <li className="hover:text-white hover:font-bold">
              <Link to={"/"}>&gt; &nbsp;Home</Link>
            </li>
            <li className="hover:text-white hover:font-bold">
              <Link to={"/aboutUs"}>&gt; &nbsp;About Us</Link>
            </li>
            <li className="hover:text-white hover:font-bold">
              <Link to={"/contactUs"}>&gt; &nbsp;Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* contect contect  */}
        <div className="md:w-[30%]">
          <h4 className="text-2xl font-medium">Connect With Us</h4>
          <div className="h-1 bg-green-600 rounded-3xl w-20 mt-2 mb-4"></div>
          {/* <h3 className="text-[15px] flex items-center mb-1">
            <span class="material-symbols-outlined text-black">pin_drop</span>{" "}
            <span className="text-black font-medium">
              &nbsp;&nbsp;OFffice Address
            </span>
          </h3>
          <h4 className="text-white mb-1 ml-2">
            Khadi Bhandar Gate, Court Road, Madhubani, Bihar, 847211
          </h4> */}
          <h3 className="text-[15px] flex items-center">
            <span class="material-symbols-outlined text-black mb-1">
              support_agent
            </span>{" "}
            <span className="text-black font-medium">
              &nbsp;&nbsp;Phone Number
            </span>
          </h3>
          <h4
            onClick={() => (window.location.href = "tel:+91-7761097990")}
            style={{ cursor: "pointer" }}
            className="text-white ml-2 hover:text-white hover:font-bold"
          >
            +91-7761097990
          </h4>
          <h3 className="text-[15px] flex items-center mb-1 mt-1">
            <span class="material-symbols-outlined text-black">mail</span>{" "}
            <span className="text-black font-medium">&nbsp;&nbsp;Email Id</span>
          </h3>
          <h4
            onClick={() =>
              (window.location.href = "mailto:jankaribiharbhumi@gmail.com")
            }
            style={{ cursor: "pointer" }}
            className="text-white ml-2 hover:text-white hover:font-bold"
          >
            jankaribiharbhumi@gmail.com
          </h4>
        </div>
      </div>
      {/* // Line Container  */}
      <div className="h-[1px] bg-gray-800 my-10"></div>
      {/* // All Right Content */}
      <div className="font-medium text-center">
        <span>
          © 2024. All Rights Corprest Consultancy Reserved.{" "}
          <span className="text-black">
            Designed & Developed By Satyam SOLUTION PVT.LTD.
          </span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
