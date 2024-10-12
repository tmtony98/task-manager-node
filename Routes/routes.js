//import express becoz we are using express framework here
const express = require("express")

//import userController js file
const userController = require("../Controllers/usercontroller")


//create router for express app using Router()
const router = new express.Router()

//register
router.post("/user/register", userController.register)

//login
router.post('/user/login', userController.login)

//add task
router.post ("/addTask" , userController.addtask)

router.get("/getTask", userController.getTask)


router.delete('/deleteTask/:id',  userController.deleteTask);


//export router
module.exports = router