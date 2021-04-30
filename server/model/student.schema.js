const mongoose=require('./db');
const schema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
      type:String,
      required:true
    },
    password:{
        type:String,
        required:true
    },
    
})
module.exports =mongoose.model('students',schema);