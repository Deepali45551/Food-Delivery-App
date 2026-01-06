import React from "react";
import {
  PlusSquare,
  ClipboardList,
  ShoppingBag,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    { name: "Add Items", icon: PlusSquare, path: "/add" },
    { name: "List Items", icon: ClipboardList, path: "/list" },
    { name: "Orders", icon: ShoppingBag, path: "/orders" },
  ];

  return (
    <aside
      className="w-64 min-h-[calc(100vh-4rem)] bg-cover bg-orange-300 bg-center relative"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/youtube-thumbnail-orange-gradient-nm9iw60na2j0ibcy.jpg')",
      }}
    >
      {/* Brand */}
      <div className="px-6 py-4 border-b bg-orange-400">
        <h2 className="text-2xl font-bold text-white">
          Admin<span className="font-light">Panel</span>
        </h2>
        <p className="text-sm text-orange-100 mt-1">
          Manage your delivery
        </p>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2">
        {menu.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer 
                transition-all duration-200 group
                ${
                  isActive
                    ? "bg-white text-orange-600 shadow-md"
                    : "text-white hover:bg-orange-50 hover:text-orange-600"
                }`
              }
            >
              <Icon
                className={`w-5 h-5 ${
                  window.location.pathname === item.path
                    ? "text-orange-500"
                    : "text-white group-hover:text-orange-500"
                }`}
              />
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
