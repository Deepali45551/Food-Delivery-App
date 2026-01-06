import React, { useContext,  useEffect,  useState } from 'react'
import { StoreContext } from '../../context/Storecontext'
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom'
const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }
const placeOrder = async(event)=>{
event.preventDefault();
let orderItems = [];
food_list.map((item)=>{
  if(cartItems[item._id]>0){
    let itemInfo =item;
    itemInfo["qunatity"]= cartItems[item._id];
    orderItems.push(itemInfo);
    }
})
let orderData = {
  address:data,
  items:orderItems,
  amount:getTotalCartAmount()+2,
}
let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}})
if(response.data.success){
  const {session_url} =response.data;
  window.location.replace(session_url)
}
else{
  alert(Error);
}
}
 const navigate =useNavigate();
useEffect(()=>{
if(!token){
navigate('/cart')
}else if(getTotalCartAmount()===0)
{
  navigate('/cart')
}
},[token])


  return (
    <form onSubmit={placeOrder} className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT SECTION */}
      <div className="space-y-4">

        <p className="text-2xl font-bold mb-6">Delivery Information</p>

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <input
          required
            type="text"
            name='firstName'
            onChange={onChangeHandler}
            value={data.firstName}
            placeholder="First name"
            className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg 
               focus:border-blue-500 focus:ring-1 focus:ring-blue-200 
               transition-all duration-200 shadow-sm hover:border-gray-400"
          />
          <input
            type="text"
             required
            name='lastName'
            onChange={onChangeHandler}
            value={data.lastName}
            placeholder="Last Name"
            className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg 
               focus:border-blue-500 focus:ring-1 focus:ring-blue-200 
               transition-all duration-200 shadow-sm hover:border-gray-400"
          />
        </div>

        {/* Row 2 */}
        <div className="mt-4">
          <input
            name='email'
             required
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg 
               focus:border-blue-500 focus:ring-1 focus:ring-blue-200 
               transition-all duration-200 shadow-sm hover:border-gray-400"
          />
        </div>

        {/* Row 3 */}
        <div className="mt-4">
          <input
            type="text"
            name='street'
             required
            onChange={onChangeHandler}
            value={data.street}
            placeholder="Street"
            className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg 
               focus:border-blue-500 focus:ring-1 focus:ring-blue-200 
               transition-all duration-200 shadow-sm hover:border-gray-400"
          />
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          <input
            type="text"
            name='city'
             required
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
            className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg 
               focus:border-blue-500 focus:ring-1 focus:ring-blue-200 
               transition-all duration-200 shadow-sm hover:border-gray-400"
          />
          <input
            type="text"
            name='state'
             required
            onChange={onChangeHandler}
            value={data.state}
            placeholder="State"
            className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg 
               focus:border-blue-500 focus:ring-1 focus:ring-blue-200 
               transition-all duration-200 shadow-sm hover:border-gray-400"
          />
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          <input
            type="text"
            name='zipcode'
             required
            onChange={onChangeHandler}
            value={data.zipcode}
            placeholder="Zip Code"
            className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg 
               focus:border-blue-500 focus:ring-1 focus:ring-blue-200 
               transition-all duration-200 shadow-sm hover:border-gray-400"
          />
          <input
            type="text"
            name='country'
             required
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Country"
            className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg 
               focus:border-blue-500 focus:ring-1 focus:ring-blue-200 
               transition-all duration-200 shadow-sm hover:border-gray-400"
          />
        </div>

        {/* Row 6 */}
        <div className="mt-4">
          <input
           required
            type="text"
            name='phone'
            onChange={onChangeHandler}
            value={data.phone}
            placeholder="Phone"
            className="w-full px-4 py-2 bg-white border-2 border-gray-300 rounded-lg 
               focus:border-blue-500 focus:ring-1 focus:ring-blue-200 
               transition-all duration-200 shadow-sm hover:border-gray-400"
          />
        </div>
      </div>
      {/* RIGHT SECTION */}
      <div className="space-y-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
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


        {/* BUTTON */}
        <div className="md:col-span-2">
          <button 
          type='submit'
          className="w-full md:w-auto mt-6 bg-[#ff4917] text-white py-3 px-8 rounded-md font-semibold hover:opacity-90 transition">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
