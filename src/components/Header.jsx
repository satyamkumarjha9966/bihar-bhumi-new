import React, { useEffect, useState } from "react";

function Header() {
  const [showPopup, setShowPopup] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowPopup(true);
  //     setTimeout(() => setShowPopup(false), 4000); // Show popup for 4 seconds
  //   }, 20000); // Show popup every 20 seconds
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      {/* Popup */}
      {showPopup && (
        <div className="fixed bottom-4 left-4 z-50 -translate-x-1/2 bg-white border-2 border-[#FF6600] text-black px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
          <span className="material-symbols-outlined text-[#FF6600] text-2xl">
            info
          </span>
          <span className="font-semibold">
            Welcome to Bihar Bhumi! For instant help, call{" "}
            <span
              className="text-[#FF6600] cursor-pointer"
              onClick={() => (window.location.href = "tel:+91-7761097990")}
            >
              +91-7761097990
            </span>
          </span>
        </div>
      )}
      <div className="w-full bg-black text-white px-4 md:px-16 flex flex-col md:flex-row items-center justify-between py-2 font-medium shadow-sm">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FF6600] text-xl">
              call
            </span>
            <span
              onClick={() => (window.location.href = "tel:+91-7761097990")}
              style={{ cursor: "pointer" }}
              className="hover:text-[#FF6600] transition-colors"
            >
              +91-7761097990
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#FF6600] text-xl">
              mail
            </span>
            <span
              onClick={() =>
                (window.location.href = "mailto:jankaribiharbhumi@gmail.com")
              }
              style={{ cursor: "pointer" }}
              className="hover:text-[#FF6600] transition-colors"
            >
              jankaribiharbhumi@gmail.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
