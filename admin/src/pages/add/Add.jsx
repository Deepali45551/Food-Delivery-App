import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios"
import { toast } from "react-toastify";

const Add = ({url}) => {
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        category: "Salad",
        price: ""
    });

    const categories = [
        { value: "Salad" },{ value: "Rolls" },{ value: "Sandwich" },{ value: "Cake" },
        { value: "Pure Veg" },{ value: "Noodles" },{ value: "Pasta", },{ value: "Deserts" }
    ];

    const onChangeHandler = (event) => {
        const name = event.target.name;
         const  value = event.target. value;
        setData(data => ({...data,[name]: value}));
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        // Handle form submission
        const formData =new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",(data.category))
        formData.append("image",image)
        const response = await axios.post(`${url}/api/food/add`,formData);
        if(response.data.success){
setData({
        name: "",
        description: "",
        category: "Salad",
        price: ""
    })
    setImage(false)
    toast.success(response.data.message);
        }else{
             toast.error(response.data.message);
        }
    };

    return (
        <div className="min-h-[calc(100vh-4rem)] bg-orange-50 p-4 md:p-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl text-orange-400 md:text-3xl text-center font-bold bg-clip-text">
                        Add New Product
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Image Upload */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">

                            {/* Image Upload Area */}
                            <div className="flex flex-col items-center justify-center gap-2 md:col-span-2">
                                <p className="text-sm font-semibold text-center text-gray-700">Upload Image</p>
                                <label
                                    htmlFor="image"
                                    className="border-2 border-dashed border-orange-300 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-orange-50 transition"
                                >
                                    <img
                                        src={image ? URL.createObjectURL(image) : assets.upload_area}
                                        alt=""
                                        className="w-20 opacity-80"
                                    />
                                    <span className="text-xs text-gray-500 mt-1">
                                        Click to upload
                                    </span>
                                </label>
                                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
                            </div>
                        </div>
                    </div>
                    {/* Right Column - Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={onSubmitHandler}className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                            {/* Product Name */}
                            <div className="mb-3">
                                <label className=" text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                    Product Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={onChangeHandler}
                                        placeholder="e.g., Crispy Chicken Burger"
                                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700 placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Product Description */}
                            <div className="mb-2">
                                <label className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                    Product Description
                                </label>
                                <div className="relative">
                                    <textarea
                                        name="description"
                                        value={data.description}
                                        onChange={onChangeHandler}
                                        placeholder="Describe your delicious dish..."
                                        rows="4"
                                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700 placeholder-gray-400 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Category */}
                                <div className="mb-2">
                                    <label className=" text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                        Category
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="category"
                                            value={data.category}
                                            onChange={onChangeHandler}
                                            className="w-full border-2 border-gray-200 rounded-xl px-4 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700 appearance-none bg-white"
                                        >
                                            {categories.map((cat) => (
                                                <option key={cat.value} value={cat.value}>
                                                    {cat.value}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-4 pointer-events-none">
                                            <span className="text-gray-400">▼</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="mb-2">
                                    <label className=" text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                        Price
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-3.5">
                                            <span className="text-gray-700 font-bold">$</span>
                                        </div>
                                        <input
                                            type="number"
                                            name="price"
                                            value={data.price}
                                              onChange={onChangeHandler}
                                            placeholder="0.00"
                                            min="0"
                                            step="0.01"
                                            className="w-full border-2 border-gray-200 rounded-xl pl-10 pr-4 py-2 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                                <button
                                    type="submit"
                                    className="flex-1 bg-orange-400 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                                >
                                    <span>Add Product</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;