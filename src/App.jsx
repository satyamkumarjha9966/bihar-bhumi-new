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
  // NOTE: Removed automatic popups/overlays to comply with AdSense policy
  // Popups should be user-initiated; keep the state available for future
  // user actions but do not trigger it automatically.

  return (
    <>
      {popUp ? (
        <div className="fixed inset-0 z-50 backdrop-blur-sm flex justify-center items-center p-2">
          <div className="bg-white rounded-2xl shadow-2xl p-6 border-4 border-[#FF6600] relative flex flex-col items-center max-w-md w-full animate-fade-in">
            <span
              className="material-symbols-outlined text-4xl font-bold absolute top-3 right-3 cursor-pointer text-[#FF6600] hover:text-black transition-colors"
              onClick={() => setPopUp(false)}
              title="Close"
            >
              cancel
            </span>
            <img
              src={customerAgent}
              alt="Customer Service Agent"
              className="w-20 h-20 mb-3 rounded-full border-2 border-[#FF6600] bg-[#FFF5ED] object-cover"
            />
            <span className="text-center font-bold text-xl text-black mb-1">
              Connect with our{" "}
              <span className="text-[#FF6600]">Customer Service Agent</span> now
              for swift assistance!
            </span>
            <br />
            <span className="text-center text-base text-black mb-2 font-semibold">
              हमारे <span className="text-[#FF6600]">कस्टमर सर्विस एजेंट</span>{" "}
              से तुरंत सहायता के लिए संपर्क करें!
            </span>
            <button
              className="mt-2 px-6 py-2 bg-[#FF6600] text-white font-semibold rounded-lg shadow hover:bg-black hover:text-[#FF6600] transition-colors text-lg flex items-center gap-2"
              onClick={() => (window.location.href = "tel:+91-7761097990")}
            >
              <span className="material-symbols-outlined text-xl">call</span>
              Call Now
            </button>
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
