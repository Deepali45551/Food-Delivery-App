import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 relative mt-10"
    id='footer'>
      {/* Background Moon image */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {/* <img src="/logo.png" alt=" BeyondInfinities Logo" className="w-8 h-8" /> */}
            <h2 className="text-white text-xl font-bold"> Desi Dash</h2>
          </div>
          <p className="text-sm leading-relaxed mb-6">
              Serving freshly prepared meals made with quality ingredients.
            Fast delivery, great taste, and happiness in every bite.
          </p>
          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-white font-semibold mb-4">Pages</h3>
          <ul className="space-y-2 text-sm">
                 <li>
              <a href="/home" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about-us" className="hover:text-white">
                About Us
              </a>
            </li>
    
            <li>
              <a href="/delivery" className="hover:text-white">
           Delivery
              </a>
            </li>
            <li>
              <a href="/privacypolicy" className="hover:text-white">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-white font-semibold mb-4">Address</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <MdEmail className="text-lg" />
               deepalikatiyar6@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <MdLocationOn className="text-lg" />
             Gyan Khand 1, Ghaziabad Noida Uttar Pradesh
            </li>
            <li className="flex items-center gap-3">
              <MdPhone className="text-lg" />
             +91 8887942505
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Stay informed with  DesiDash by subscribing to our newsletter.
          </p>
          <form className="flex">
            <div className="flex items-center bg-gray-900 px-3 w-full">
              <MdEmail className="text-gray-400" />
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent w-full py-3 px-2 text-sm outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black px-5 flex items-center justify-center"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-gray-800 text-center py-6 text-sm text-gray-400">
       Copyright © 2025 Desi Dash. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
