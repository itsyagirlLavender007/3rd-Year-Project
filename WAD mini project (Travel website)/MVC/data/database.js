import mongoose from "mongoose"

export const connectDb = () =>{
mongoose.connect(process.env.MONGO_URL,{
    dbName: "backendapi",
})
.then(()=>console.log("Database Connected"))
.catch((err)=>console.log(err));
}