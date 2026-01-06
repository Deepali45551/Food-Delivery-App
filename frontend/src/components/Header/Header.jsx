import React, { useState, useEffect } from "react";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative w-full bg-cover bg-no-repeat bg-center flex items-center
        ${isSmallScreen ? "min-h-[30vh]" : "h-screen"}
      `}
      style={{ backgroundImage: "url('/header_img.png')" }}
    >
      {/* Content */}
      <div className="relative pl-15 md:pl-20 max-w-xl mt-4 md:mt-0">
        <h2 className="text-lg md:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight drop-shadow-md animate-fade-in">
          Fresh Flavors, <br /> Fast Delivery
        </h2>

        <p className="text-white w-50 md:w-full text-xs md:text-xl mb-8 animate-fade-in ">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise.
        </p>

        <button className="text-xs md:text-lg bg-white text-black font-semibold animate-fade-in py-1 md:py-2 px-2 md:px-4 rounded-md md:rounded-lg shadow-lg transition duration-300">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
