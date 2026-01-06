import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          My Orders
        </h2>

        {data.length === 0 ? (
          <p className="text-gray-500 text-center">
            No orders found.
          </p>
        ) : (
          <div className="space-y-6">
            {data.map((order, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                {/* Left */}
                <div className="flex items-start gap-4">
                  <img
                    src={assets.parcel_icon}
                    alt="parcel"
                    className="w-14 h-14"
                  />

                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      {order.items.map((item, i) => (
                        <span key={i}>
                          {item.name} x {item.quantity}
                          {i !== order.items.length - 1 && ", "}
                        </span>
                      ))}
                    </p>

                    <p className="text-sm text-gray-500">
                      Items: {order.items.length}
                    </p>
                  </div>
                </div>

                {/* Middle */}
                <div className="text-lg font-semibold text-gray-800">
                  ₹{order.amount}
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  ></span>
                  <span className="font-medium text-gray-700">
                    {order.status}
                  </span>
                </div>

                {/* Action */}
                <button onClick={fetchOrders} className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition">
                  Track Order
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
