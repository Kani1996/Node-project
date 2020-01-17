const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
      firstName: {
          type : String,
          reruired : true
      },
      lastName:{
          type : String
      },
      mobileNumber: {
          type : String
      },
      emailId: {
          type : String
      },
      password: {
          type : String
      }
});
const Person = module.exports = mongoose.model('person', personSchema);