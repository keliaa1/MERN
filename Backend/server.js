import express from "express"
import { dbConnect } from "./config/db.js";


const app = express();

app.get("/product",(req, res)=>{
    res.send("Wassup y'all")
})

app.listen(5000, ()=>{
    dbConnect();
    console.log("Server started at http://localhost:5000 ")
});

