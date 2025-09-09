import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import CallBox from "./components/CallBox";
import customerAgent from "./assets/cs.png";

function App() {
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!popUp) {
        setPopUp(true);
      }
    }, 20000);

    return () => clearInterval(intervalId);
  }, [popUp]);

  useEffect(() => {
    // Add or remove overflow hidden on the body based on popUp state
    if (popUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [popUp]);

  return (
    <>
      {popUp ? (
        <div className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center p-2">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg p-5 border-[6px] border-black relative">
            <span
              className="material-symbols-outlined text-5xl font-bold absolute top-4 right-4 cursor-pointer text-white"
              onClick={() => setPopUp(false)}
            >
              cancel
            </span>
            <div className="flex flex-col items-center justify-center">
              <img src={customerAgent} alt="" height={"100%"} width={"100%"} />
              <span className="text-center font-bold text-xl text-white">
                Connect with our Customer Service Agent now for swift
                assistance!
              </span>
              <div
                className="p-4 cursor-pointer"
                onClick={() => (window.location.href = "tel:+91-7761097990")}
              >
                <CallBox />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <Header />
      <Navbar />
      <AllRoutes />
      <Footer />
      <div
        className="fixed bottom-8 md:bottom-12 right-8 md:right-16"
        onClick={() => (window.location.href = "tel:+91-7761097990")}
      >
        <CallBox />
      </div>
    </>
  );
}

export default App;
