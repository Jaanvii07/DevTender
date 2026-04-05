const express= require('express');
const connectDB = require('./config/database');
const User = require('./models/user');

const app= express();

app.post('/signup' , async(req,res)=>{
    // creating new user insaide database
    const user=new User({
       firstName:"Arshvi",
        lastName:"patel",
        email:"Arshvi.patel@example.com",
        password:"arshvi123",
        age:19,
        gender:"Female" 
    })
    try{
    await user.save();
    res.send("User created successfully");
    }
    catch(error){
        console.error('Error creating user:', error);
        res.status(500).send("Error creating user");
    }
})

connectDB()
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });