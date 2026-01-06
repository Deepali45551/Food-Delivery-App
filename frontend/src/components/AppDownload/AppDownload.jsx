import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div
      id="app-download"
      className="w-full bg-white py-16 px-4 flex justify-center"
    >
      <div className="max-w-4xl text-center">
        {/* Text */}
        <p className="text-3xl md:text-4xl font-semibold text-black leading-snug">
          For Better Experience Download<br />
          <span className="text-black"> DesiDash App</span>
        </p>

        {/* Store Buttons */}
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          <img
            src={assets.play_store}
            alt="Play Store"
            className="w-44 cursor-pointer transition transform hover:scale-105"
          />
          <img
            src={assets.app_store}
            alt="App Store"
            className="w-44 cursor-pointer transition transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
