import mongoose from "mongoose"
import {DB_NAME} from './constants.js'
import connectDB from "./db/index.js"
import dotenv from "dotenv";


dotenv.config({
    path: './env'
})

connectDB()

/*
import express from 'express'
const app = express()
(async() => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Errrorrr", error);
            throw err
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listeneing on port ${process.env.PORT}`)
        })
    }
    
    catch(error){
        console.log("Error : ", error)
        throw err
    }
})()
    */