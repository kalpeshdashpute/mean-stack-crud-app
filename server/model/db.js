const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student',(err)=>{
    if(!err){
        console.log('connected to mongo db...');
    }
    else{
        console.log(err);
    }
})

module.exports=mongoose;
