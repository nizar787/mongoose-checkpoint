
const mongoose=require('mongoose');



const connectDB= async ()=>{
 try {
await mongoose.connect('mongodb://localhost:27017/test');
  console.log('database connected');
 }
 catch (error) {
  console.log(error);
 }

};

module.exports =connectDB;