import express from "express";
import mongoose from "mongoose";
// import mongoose from "mongoose";
import schema from "./dbModel.mjs"
import data from "./data.mjs";
const app = express();
const port = process.env.PORT || 4500;

const conn  = "mongodb+srv://AbdullahKhan:mazullah213@cluster0.zugrknx.mongodb.net/TiktokClone?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);
app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
next();
})

mongoose.connect(conn).then(() =>{
    console.log("connected successfully")
}).catch((error) =>{
    console.log(error);
})



app.get("/",async(req,res)=>{
    res.status(200).send("Hello Clever programmers");
})
app.get("/data",async(req,res)=>{
    res.status(200).send(data);
})

app.post("/add",(req,res)=>{

    const card  = req.body;
    schema.create(card,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.post("/student",(req,res)=>{
    const User = schema(req.body);
    console.log(User);
    User.save().then(()=>{
        res.status(200).send(User);
        // console.log("response has send");
    }).catch((err)=>{
   console.log(err);
    })
})



app.get("/std",async(req,res)=>{
    schema.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data)
        }
    })
})



app.get("/Mydata",async(req,res)=>{

    data.find((err,data)=>{
        if(err){
            res.status(500).send(err);
            console.log(err);
        }
        else{
            res.status(200).send(data)
        }
    })



})

app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})