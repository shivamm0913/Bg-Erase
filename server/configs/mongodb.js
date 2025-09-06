import mongoose from "mongoose";

const connecDB = async ()=>{
  mongoose.connection.on('connected',()=>{
    console.log("Database connected")
  })
  await mongoose.connect(`${process.env.MONGODB_URI}/bg-erase`)
}

export default connecDB;