import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext.jsx'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

  const { food_list } = useContext(StoreContext)
  return (
    <div className="food-display px-4 md:px-10 lg:px-20 bg-gray-50" id="food-display">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Top Dishes near you
      </h1>

      <div className="food-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description}
              price={item.price} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
