import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-4 md:px-16 mt-10 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 justify-between">
        {/* About Section */}
        <div className="md:w-1/3">
          <h4 className="text-2xl font-bold text-[#FF6600] mb-2">About Us</h4>
          <div className="h-1 bg-[#FF6600] rounded-3xl w-20 mb-4"></div>
          <p className="text-gray-300 text-justify">
            Explore Bihar's Revenue and Land Reforms Department effortlessly
            with our user-friendly third-party website. Access vital services,
            submit applications, and track progress seamlessly for efficient
            land-related transactions. Simplifying interactions and enhancing
            transparency for citizens and stakeholders alike.
          </p>
        </div>
        {/* Quick Links */}
        <div className="md:w-1/3">
          <h4 className="text-2xl font-bold text-[#FF6600] mb-2">
            Quick Links
          </h4>
          <div className="h-1 bg-[#FF6600] rounded-3xl w-20 mb-4"></div>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="text-white hover:text-[#FF6600] font-medium transition-colors"
              >
                &gt; Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutUs"
                className="text-white hover:text-[#FF6600] font-medium transition-colors"
              >
                &gt; About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contactUs"
                className="text-white hover:text-[#FF6600] font-medium transition-colors"
              >
                &gt; Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-white hover:text-[#FF6600] font-medium transition-colors"
              >
                &gt; Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-white hover:text-[#FF6600] font-medium transition-colors"
              >
                &gt; Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Section */}
        <div className="md:w-1/3">
          <h4 className="text-2xl font-bold text-[#FF6600] mb-2">
            Connect With Us
          </h4>
          <div className="h-1 bg-[#FF6600] rounded-3xl w-20 mb-4"></div>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[#FF6600] text-xl">
              support_agent
            </span>
            <span className="font-medium">Phone Number</span>
          </div>
          <p
            onClick={() => (window.location.href = "tel:+91-7761097990")}
            style={{ cursor: "pointer" }}
            className="text-white ml-2 hover:text-[#FF6600] font-medium transition-colors"
          >
            +91-7761097990
          </p>
          <div className="flex items-center gap-2 mb-2 mt-3">
            <span className="material-symbols-outlined text-[#FF6600] text-xl">
              mail
            </span>
            <span className="font-medium">Email Id</span>
          </div>
          <p
            onClick={() =>
              (window.location.href = "mailto:jankaribiharbhumi@gmail.com")
            }
            style={{ cursor: "pointer" }}
            className="text-white ml-2 hover:text-[#FF6600] font-medium transition-colors"
          >
            jankaribiharbhumi@gmail.com
          </p>
        </div>
      </div>
      <div className="h-[1px] bg-[#222] my-10"></div>
      <div className="font-medium text-center text-gray-400">
        <span>
          © 2025. All Rights Bihar Bhumi Jankari Reserved.{" "}
          <span className="text-[#FF6600]">
            Designed & Developed By Satyam Solution PVT. LTD.
          </span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
