import React from "react";
import "../styles/CallBox.css";
import callIcon from "../assets/call.png";

function CallBox() {
  return (
    <div className="h-24 w-24 bg-white rounded-full shadow-lg flex justify-center items-center border-4 border-orange-600 animate-pulse-size">
      <img src={callIcon} alt="" height={51} width={51} />
    </div>
  );
}

export default CallBox;
