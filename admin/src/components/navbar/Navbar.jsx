import React from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItemClass =
    "relative text-sm font-medium text-white text-slate-800 hover:text-blue-700 transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full";

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <nav
        className={`w-full fixed top-0 left-0  z-50 transition-all duration-300 ${
          isHome ? "bg-orange-400 shadow-md" : "bg-orange-400 shadow-md"
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-6 py-4">
          {/* Logo - Left (replaced Deepali text) */}
          <img
            src={assets.logos}
            alt="Logo"
            className="text-xl font-semibold h-14 w-18"
          />

          {/* Nav Items - Center */}

          {/* Profile Pic - Right (replaced Contact button) */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            <img
              src={assets.profile_image}
              alt="Profile"
              className=" text-sm text-white px-2 py-2 rounded-full font-semibold transition h-16 w-16 object-cover cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
