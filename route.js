const express = require('express');
const router = express.Router();
const Person = require('./models/person');

router.get('/persons',(req,res,next)=>{
    Person.find(function(err, person){
     res.json(person);
  })
});
router.post('/person',(req,res,next)=>{
    let newPerson  = new Person ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobileNumber: req.body.mobileNumber,
        emailId:req.body.emailId
    });
    newPerson.save((err,person)=>{
       if(err){
           res.json({msg : "Error while saving data!"});
       }else{
           res.json({msg: "Person Details sucessfully saved!!"+ person});
       }
    })
});
router.delete('/person/:id',(req,res,next)=>{
    Person.remove({_id : req.params.id},function(err,result){
         if(err){
             res.json(err);
         }else{
             res.json(result);
         }
    })
});


module.exports = router;