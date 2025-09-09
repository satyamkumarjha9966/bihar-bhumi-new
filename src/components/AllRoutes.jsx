import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "./Error";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Signup from "./Signup";
import Login from "./Login";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutUs" element={<About />} />
        <Route path="contactUs" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
