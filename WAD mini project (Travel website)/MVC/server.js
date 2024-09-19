import { app } from "./app.js";
import { connectDb } from "./data/database.js";

const port = 3000;
connectDb();

app.listen(port, ()=>{
    console.log("SERVER IS WORKING");  
})