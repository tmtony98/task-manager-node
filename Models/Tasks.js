const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        // required:true
    }

})

const task = mongoose.model("task",taskSchema)

module.exports = task
 