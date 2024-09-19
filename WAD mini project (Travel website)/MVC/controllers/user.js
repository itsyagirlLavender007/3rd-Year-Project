import { User } from "../models/user.js";

export const getAllUser = async (req,res)=>{

    const users = await User.find({})
    console.log(req.query);
    console.log(req.query.v);
    res.json({
        success:true,
        users,
    })
}

export const register = async (req,res)=>{

    //This can only work when use express.json() middleware
    const {name,email,password}=req.body;
    await User.create({
        name,
        email,
        password});
        
    res.status(201).cookie("temp","vkhdbvss").json({ //status 201 = created
        success:true,
        message:"Registered successfully",
    })
}

export const idFunc = async (req,res)=>{
    const {id} = req.query
    const user = await User.findById(id);
    console.log(req.params);
    res.json({
        success:true,
        user:{}
    })
}