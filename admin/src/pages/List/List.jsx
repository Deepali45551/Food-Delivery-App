import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";
const List = ({url}) => {

    const [list, setList] = useState([]);


    const fetchList = async () => {
        const response = await axios.get(`${url}/api/food/list`);
        if (response.data.success) {
            setList(response.data.data);
        } else {
            toast.error("Error")
        }
    }
    useEffect(() => {
        fetchList();
    }, []);

    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
        await fetchList();
        if(response.data.success){
            toast.success(response.data.message)
        }
        else{
            toast.error("Error")
        }
    }
    return (
        <div className="min-h-screen w-full bg-gray-100 p-6">
            <div className="bg-white rounded-lg shadow-sm w-full">

                {/* Header */}
                <div className="grid grid-cols-5 gap-4 px-6 py-4 border-b font-semibold text-gray-700">
                    <div> Image</div>
                    <div>Name</div>
                    <div>Category</div>
                    <div>Price</div>
                    <div>Actions</div>
                </div>

                {/* Rows */}
                {list.map((item, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-5 gap-4 px-6 py-5 items-center border-b hover:bg-gray-50"
                    >
                        {/* Image */}
                        <div>
                            <img
                                src={`${url}/images/${item.image}`}
                                alt={item.name}
                                className="w-14 h-14 rounded-xl object-cover"
                            />
                        </div>

                        {/* Name */}
                        <div>
                            <p className="font-semibold text-gray-900">{item.name}</p>
                        </div>

                        {/* Category */}
                        <div>
                            <span className="px-4 py-1 text-sm rounded-full bg-gray-100">
                                {item.category || "NaN"}
                            </span>
                        </div>

                        {/* Price */}
                        <div className="text-lg font-bold">${item.price}</div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <button onClick={() => removeFood(item._id)} className="px-4 py-2 rounded-lg bg-red-100 text-red-600 text-sm">
                                <FiTrash2 />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
