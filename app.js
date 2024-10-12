//to load .env file
require('dotenv').config()

//import express server
const express = require("express")

//import cors 
const cors = require("cors")
 
//import router
const router = require("./Routes/routes")

//import db
require("./DB/Connection")

//create express server
const taskServer = express()

//use cors
taskServer.use(cors())

//parse json data using server data
taskServer.use(express.json())

//router should come after cors/express 

//use router
taskServer.use(router)

//customize port for server app
 const PORT = 4000 || process.env.PORT

 //to run the server app
 taskServer.listen(PORT,()=>{
    console.log(`task  server started at port:${PORT}`);
 })
 
 //resolve request to localhost 4000
 //argument ist one path, 2nd argument how to resolve
 //if get requeest comes 
 taskServer.get("/", (req,res)=>{
    res.send(`<h1> project started and waiting for response !! </h1>`)
 })

 taskServer.put("/", (req,res)=>{
   res.send(`<h1>put response!! </h1>`)
})

taskServer.delete("/", (req,res)=>{
   res.send(`<h1>delete response  !! </h1>`)
})


