//import user model
const req = require("express/lib/request");
const users = require("../Models/Userschema");
const Task = require("../Models/Tasks")
const jwt = require("jsonwebtoken")
//register
exports.register = async (req, res) => {
  console.log("inside register functioin");
  const { name, email, password } = req.body;
  console.log(`name:${name}, Email:${email}, password:${password}`);

  try {
    //check already existting user in mongodb -findone()
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      res.status(406).json("user alrready exists ...please login"); //this will show in frontend
    } else {
      //register user
      const newUser = new users({
        name,
        email,
        password,
      });
      console.log(newUser);

      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(401).json(`error:${err}`);
  }
  // res.status(200).json("register request received")
};

exports.login = async (req, res) => {
  console.log("inside login  fn");
  const { email, password } = req.body;
  console.log(`email is ${email} and password is ${password}`);
  try {
    const existingUser = await users.findOne({ email, password });
    console.log(existingUser);
    if (existingUser) {
      //generate token
      const token = jwt.sign({ userId: existingUser._id }, "superSecretKey123");
      // console.log(userId);
      res.status(200).json({
        existingUser,
        role: "user",
        token,
      });
    } else {
      res.status(404).json("no user found,Do sign up");
    }
  } catch (err) {
    res.status(401).json(`Error ${err}`);
  }
};

exports.addtask = async (req, res) => {
  console.log("inside addtask fn");
  
  const { task } = req.body;
  console.log(req.body);

  try {
    const newTask = new Task({ task:task});
    
    await newTask.save();

    res.status(200).json({
      message: "Task added successfully",
      newTask
    });
  } catch (err) {
    res.status(401).json(`Error: ${err}`);
  }
};


exports.getTask =async (req, res)=>{
  console.log("inside get task fn");
try{
  const tasks = await Task.find();
  res.status(200).json(tasks);
}catch(err){
  res.status(401).json(`Error: ${err}`);
  
}
}

exports.deleteTask = async (req, res) => {
  console.log("inside delete fn");
  
  try {
    const taskId = req.params.id; 
    console.log(taskId);
    
    const deletedTask = await Task.findByIdAndDelete(taskId);  

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: `Error: ${error.message}` });
  }
}

  
