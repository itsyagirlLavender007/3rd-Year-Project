import express from "express"
// import mongoose, { Mongoose } from "mongoose";
import userRouter from "./routes/user.js"
// import { connectDb } from "./data/database.js";
import { config } from "dotenv";

config({
    path: "./data/config.env",
});

export const app = express();

//using middleware to get json stuff
app.use(express.json())
app.use("/users",userRouter);

// mongoose.connect("mongodb://localhost:27017/",{
//     dbName: "backendapi",
// })
// .then(()=>console.log("Database Connected"))
// .catch((err)=>console.log(err));
// connectDb()
// const schema = new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String
// })

// const User = mongoose.model("User",schema);

app.get("/",(req,res)=>{
    res.send("Hey");
})

// app.get("/users/all",async (req,res)=>{

//     const users = await User.find({})
//     console.log(req.query);
//     console.log(req.query.v);
//     res.json({
//         success:true,
//         users,
//     })
// })

// app.post("/users/new",async (req,res)=>{

//     //This can only work when use express.json() middleware
//     const {name,email,password}=req.body;
//     await User.create({
//         name,
//         email,
//         password});
        
//     res.status(201).cookie("temp","vkhdbvss").json({ //status 201 = created
//         success:true,
//         message:"Registered successfully",
//     })
// })

// app.get("/user/id/:id",async (req,res)=>{
//     const {id} = req.query
//     // const user = await User.findById(id);
//     console.log(req.params);
//     res.json({
//         success:true,
//         user:{}
//     })
// })


// app.listen(port, ()=>{
//     console.log("SERVER IS WORKING");  
// })