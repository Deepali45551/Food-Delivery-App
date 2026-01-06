import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'

const Orders = ({ url }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data)
    } else {
      toast.error("Error")
    }
  }
 const statusHandler = async (event,orderId)=>{
   const response = await axios.post(url + "/api/order/status",{
    orderId,
    status:event.target.value
   })
   if(response.data.success){
    await fetchAllOrders();
   }
 }
  useEffect(() => {
    fetchAllOrders();
  }, [])

  return (
    <div className="order-add p-6 bg-gray-100 w-full  min-h-screen">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        Order Page
      </h3>

      <div className="order-list space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="order-item bg-white rounded-xl shadow-md p-5 flex flex-col lg:flex-row gap-6 items-start lg:items-center"
          >
            <img
              src={assets.parcel_icon}
              alt=""
              className="w-14 h-14 object-contain"
            />

            <div className="flex-1 space-y-2">
              <p className="order-item-food text-sm text-gray-700 font-medium">
                {order.items.map((item, index) => (
                  index === order.items.length - 1
                    ? `${item.name} x ${item.quantity}`
                    : `${item.name} x ${item.quantity}, `
                ))}
              </p>

              <p className="order-items-name text-base font-semibold text-gray-800">
                {order.address.firstName} {order.address.lastName}
              </p>

              <div className="order-item-address text-sm text-gray-600">
                <p>{order.address.street},</p>
                <p>
                  {order.address.city}, {order.address.state},
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>

              <p className="order-item-phone text-sm text-gray-600">
                📞 {order.address.phone}
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
              <p>Items : {order.items.length}</p>

              <p className="text-lg font-semibold text-green-600">
                ${order.amount}
              </p>

              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="Food Processing">Food Processing</option>
                <option value="Out for Delivery">Out for Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
