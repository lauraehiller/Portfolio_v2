import React from "react";
import "./loading.scss";
import logo from "../../images/Website_Logo.png";

function Loading() {
  return (
    <div className="preload" id="preload">
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}

export default Loading;
