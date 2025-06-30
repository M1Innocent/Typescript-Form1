import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import users from "./model/Schema.js"
import {sign} from "jsonwebtoken";
import {hash, compare} from "bcrypt";
const app = express();
const port = 2400;
app.use(cors());
app.use(express.json());
app.listen(port,()=>{
    console.log("Hello Innocent Server is running");
})
mongoose.connect("mongodb://localhost:27017/test")
.then(()=>{
    console.log("Database is connected successfully");
})
.catch(()=>{
    console.log("Database connection failed");
})
app.post("/user/signup", async (req, res)=>{
    try{
        const {name, pswd} = req.body;
        const hashedPassword = await hash(pswd, 10);
        await users.create({name, pswd: hashedPassword});

        const access_token = sign({
            uname: name
        });

        users.doc._token = access_token;
        await users.save();
        
        res.status(201).json({message: "user created successfully", token: access_token, user_data: {uname: name}});
    }catch(err){
        res.status(500).json({message: "failed to create user", error: err.message});
    }
})
app.post("user/add",async(req,res)=>{
    const body = req.body;
    const user = users(body);
    await user.save()
    .then(()=>{
      res.json({message:"insert successful"});
    })
    .catch(()=>{
        res.json({message:"view failed"});
    })
})
app.get("user/view",async(req,res)=>{
    await users.find()
    .then((response)=>{
      res.json({message:"All users" , user:response});
    })
    .catch(()=>{
        res.json({message:"insert failed"});
    })
})
app.delete("user/delete/:id",async(req,res)=>{
    const id = req.params.id;
    const user = await users.findByIdAndDelete(id)
    .then(()=>{
      res.json({message:"delete successful"});
    })
    .catch(()=>{
        res.json({message:"delete failed"});
    })
})
app.put("user/update/:id",async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    const user = await users.findByIdAndUpdate(i,body)
    .then(()=>{
      res.json({message:"delete successful"});
    })
    .catch(()=>{
        res.json({message:"delete failed"});
    })
})
