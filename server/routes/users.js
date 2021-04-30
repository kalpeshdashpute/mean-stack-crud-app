var express = require('express');
const Student = require('../model/student.schema');
var router = express.Router();


/* GET users listing. */
router.get('/getStudent', function(req, res, next) {
  Student.find(function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
    }
  })
});

router.post('/register',function(req,res){
  let newStudent = new Student({
    name:req.body.name,
    phone:req.body.phone,
    email:req.body.email,
    password:req.body.password
  })
  newStudent.save((err,data)=>{
    if(!err){
      res.json('contact added successfully')
    }
    else{
      res.json('failed to add contact' +err);
    }
  })
})

router.delete('/register/:id',function(req,res){
  Student.deleteOne({_id:req.params.id},function(err,result){
     if(err){
       res.json(err);
     }
     else{
       res.json(result);
     }
  })
})
router.put('/update/:id',(req,res,next)=>{
  Student.findOneAndUpdate({_id:req.params.id},{
    $set:{
      name:req.body.name,
      phone:req.body.phone,
      email:req.body.email,
      password:req.body.password
    }
  },
    function(err,result){
      if(err){
        res.json(err);
      }
      else{
        res.json(result);
      }
    
  })
})

module.exports = router;
