import React, { useEffect, useState } from "react";

function Header() {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      {/* Removed automatic popup to comply with ad policies. Contact details remain in the header. */}
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
