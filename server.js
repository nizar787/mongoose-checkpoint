const express = require('express')


const app=express();


require('dotenv').config();


const connectDB =require('./config/connectDB');
const User = require('./models/user');
app.use(express.json())
connectDB();

app.post('/add', async (req, res) =>{
        try {
    let newUser=new User({...req.body});
    let result = await newUser.save();
    res.send({ result, msg:'succesfully added'});
        } catch(error){
    console.log('error');
    
        }
  });

    app.listen(process.env.PORT, (err) => {
      err
        ? console.log(err)
        : console.log('server is runnin' + process.env.PORT)
    })