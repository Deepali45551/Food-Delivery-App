import React, { useContext } from 'react'
import { StoreContext } from '../../context/Storecontext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext)
  const navigate = useNavigate();

  return (
    <div className="cart max-w-6xl mx-auto px-4 py-8">
      <div className="cart-items bg-white shadow-lg rounded-lg p-6">

        {/* Header */}
        <div className="cart-items-title mt-2  grid grid-cols-6 gap-3 text-gray-700 font-semibold text-sm md:text-base">

          <p >Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p className="text-center">Remove</p>
        </div>

        <hr className="mt-3" />

        {/* Cart Items */}
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={index}
                className="cart-items-title cart-items-item grid grid-cols-6 gap-3 items-center py-2 border-b last:border-b-0"
              >

                <img
                  src={url + "/images/" + item.image}
                  alt=""
                  className="w-10 h-8 object-cover rounded-sm"
                />
                <p className="font-medium text-sm md:text-base">{item.name}</p>
                <p className="text-gray-600 font-semibold">${item.price}</p>
                <p className="text-gray-600">{cartItems[item._id]}</p>
                <p className="font-semibold">
                  ${item.price * cartItems[item._id]}
                </p>
                <p onClick={() => removeFromCart(item._id)}
                  className="cross text-blue-700 cursor-pointer text-center hover:scale-110 transition">
                  x
                </p>
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Cart Total Section */}
        <div className="cart-total bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>

          <div className="cart-total-details flex justify-between text-gray-700 mb-2">
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="my-2" />

          <div className="cart-total-details flex justify-between text-gray-700 mb-2">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="my-2" />

          <div className="cart-total-details flex justify-between text-lg font-semibold mt-2">
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="cart-promocode bg-white shadow-lg rounded-lg p-6">
          <div>
            <p className="text-gray-700 mb-4">
              If you have a promo code, enter it here
            </p>

            <div className="cart-promocode-input flex gap-2">
              <input
                type="text"
                placeholder="promo code"
                className="flex-1 px-4 py-2 border border-gray-300 bg-gray-200 rounded-md focus:outline-none"
              />
              <button className="bg-[#ff9700] text-white px-4 py-2 rounded-md hover:opacity-90 transition">
                Submit
              </button>
            </div>
          </div>
        </div>

      </div>

      <button onClick={() => navigate('/order')}
        className="mt-6 px-6  bg-[#ff9700] text-white py-3 rounded-md font-semibold hover:opacity-90 transition">
        PROCEED TO CHECKOUT
      </button>

    </div>

  )
}

export default Cart
