const express = require('express');
const router = express.Router();
var session = require('express-session');
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
        emailId:req.body.emailId,
        password:req.body.password
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
router.post('/login', async function(req, res, next) {
    try {
     const personObj = await Person.login(req.body);
      req.session.user = { email: personObj.email, name: personObj.name };
      //res.redirect('/list');
    }catch(e) {
      next(e);
    }
});


module.exports = router;