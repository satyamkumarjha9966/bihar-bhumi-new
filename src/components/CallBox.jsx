import React from "react";
import "../styles/CallBox.css";

function CallBox() {
  return (
    <div className="h-16 w-16 bg-white rounded-full shadow-lg flex justify-center items-center border-4 border-orange-600 animate-pulse-size">
      <span className="material-symbols-outlined text-black text-3xl font-bold">
        phone_in_talk
      </span>
    </div>
  );
}

export default CallBox;
