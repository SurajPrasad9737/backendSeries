// require('dotenv').config({path:'./env'});
import dotenv from "dotenv";

import connectDB from "../src/db/index.js";
import { app } from "./app.js";


dotenv.config({path:'./env'});

connectDB()
.then(()=>{
   app.listen(process.env.PORT||8000,()=>{
    console.log(`Server is listening on the port : ${process.env.PORT}`)
   });

   app.on('error',(error)=>{
    console.log("Mongodb error : ",error);
    throw error;
   })
   
})
.catch((err)=>{
    console.log("Mongodb Error : ",err);
    process.exit(1);
})



// import express from "express";
// const app = express();
// Database Connection using efi

// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("ERRR : ",error);
//             throw error;
//         });
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR ",error);
//         throw error;
//     }
//  })()