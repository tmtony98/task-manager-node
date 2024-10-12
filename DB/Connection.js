const mongoose = require('mongoose')
require('dotenv').config();
// const url=require('../configs')

const connectionString =  "mongodb+srv://tmtony98:demopass@cluster0.426hunc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString).then(()=>{
    console.log("mongodb connected to task manage server");
}).catch(err=>{
    console.log("mongodb connection got failed !!" + err);
})