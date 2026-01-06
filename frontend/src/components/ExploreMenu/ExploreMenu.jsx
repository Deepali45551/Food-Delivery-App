import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div
      className="explore-menu px-4 md:px-10 lg:px-20 py-12 bg-white"
      id="explore-menu"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Explore our menu
      </h1>

      {/* Description */}
      <p className="explore-menu-text text-center text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
        Choose from a diverse menu featuring a delectable array of dishes.
        Our mission is to satisfy your cravings and elevate your dining
        experience, one delicious meal at a time.
      </p>

      {/* Menu List */}
      <div className="explore-menu-list flex flex-wrap justify-center gap-6">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name

          return (
            <div
              key={index}
              onClick={() =>
                setCategory(prev =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              className="flex flex-col items-center cursor-pointer group"
            >
              {/* Image */}
              <div
                className={`w-[7.5vw] h-[7.5vw] rounded-full  overflow-hidden shadow-md transition-all duration-200
                  ${isActive ? "ring-3 ring-red-500 p-1" : "ring-2 ring-transparent"}
                `}
              >
                <img
                  src={item.menu_image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-200"
                />
              </div>

              {/* Name */}
              <p
                className={`mt-3 text-sm md:text-base font-medium transition-colors
                  ${isActive ? "text-red-500" : "text-gray-700"}
                `}
              >
                {item.menu_name}
              </p>
            </div>
          )
        })}
      </div>

      <hr className="h-1 my-10 bg-[#e2e2e2] border-none" />
    </div>
  )
}

export default ExploreMenu
