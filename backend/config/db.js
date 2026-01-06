import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://deepali_fsd:Deepalik21@cluster0.chgsthy.mongodb.net/food-delivery')
    .then(()=>console.log("DB connected"));
}