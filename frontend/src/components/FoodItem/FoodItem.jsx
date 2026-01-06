import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext.jsx';

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, removeFromCart, addToCart,url } = useContext(StoreContext);


    return (
        <div className="food-item w-full mx-auto rounded-[15px] transition-all duration-300 animate-fade-in">

            <div className="food-item-img-conatiner relative">

                <img
                    className="food-item-image w-full rounded-lg p-2 md:p-0"
                    src={url+"/images/"+image}
                    alt=""
                />

                {!cartItems[id]
                    ? <img className="add absolute bottom-2 right-2 w-8 h-8 cursor-pointer" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className="food-item-counter absolute bottom-2 right-2 gap-2 p-1 flex items-center bg-white rounded-full shadow px-2">

                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt=""
                            className="w-6 cursor-pointer"
                        />

                        <p>{cartItems[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt=""
                            className="w-6 cursor-pointer" />

                    </div>
                }
            </div>
            <div className="food-item-info p-4">
                <div className="food-item-name-rating flex items-center justify-between mb-2">

                    <p className="text-lg font-medium">{name}</p>

                    <img src={assets.rating_starts} alt="" className="w-20" />

                </div>
                <p className="food-item-desc text-gray-800 text-sm mb-1">{description}</p>

                <p className="food-item-price text-orange-700 font-semibold text-md">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
