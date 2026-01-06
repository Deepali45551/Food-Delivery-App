import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
    const [active, setActive] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }



    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Menu", path: "/#explore-menu" },
        { name: "Mobile-App", path: "/#app-download" },
        { name: "Contact Us", path: "/#footer" },
    ];

    return (
        <div className="w-full bg-white shadow-md px-6 py-2 relative z-50">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <img
                        src={assets.logos1}
                        alt="Logo"
                        className="w-12 md:w-14 object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            onClick={() => setActive(item.name)}
                            className={`cursor-pointer transition pb-1
                                ${active === item.name
                                    ? "text-red-500 border-b-2 border-red-500"
                                    : "hover:text-red-500"
                                }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </ul>

                {/* Icons */}
                <div className="flex items-center gap-5">
                    <FaSearch className="text-xl cursor-pointer" />

                    <div className="relative">
                        <Link to="/cart" className="relative inline-block">
                            <FaShoppingCart className="text-xl cursor-pointer" />
                            {getTotalCartAmount() > 0 && (
                                <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                            )}
                        </Link>
                    </div>

                    {/* Auth Section */}
                    {!token ? (
                        <button
                            onClick={() => setShowLogin(true)}
                            className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-full"
                        >
                            Sign in
                        </button>
                    ) : (
                        <div className="relative group hidden md:block">
                            {/* Profile Icon */}
                            <img
                                src={assets.profile_icon}
                                alt="Profile"
                                className="w-4 h-5 cursor-pointer"
                            />

                            {/* Dropdown */}
                            <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md
                   opacity-0 invisible group-hover:opacity-100
                   group-hover:visible transition-all z-50">
                                <li
                                    onClick={() => navigate("/myorders")}
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    <img src={assets.bag_icon} className="w-4 h-4" />
                                    <p>Orders</p>
                                </li>

                                <hr />

                                <li
                                    onClick={logout}
                                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                >
                                    <img src={assets.logout_icon} className="w-4 h-4" />
                                    <p>Logout</p>
                                </li>
                            </ul>
                        </div>
                    )}



                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setShowLogin(true)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute left-0 top-full w-full bg-white shadow-lg p-5">
                    <ul className="flex flex-col gap-4 font-semibold text-gray-700">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.path}
                                onClick={() => {
                                    setActive(item.name);
                                    setMenuOpen(false);
                                }}
                                className={`cursor-pointer
                                    ${active === item.name
                                        ? "text-red-500"
                                        : "hover:text-red-500"
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
