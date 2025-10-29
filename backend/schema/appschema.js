const mongoose = require('mongoose');
const schematype = new mongoose.Schema({
    Name:{
      type: String 
    },
    email:{
      type:String 
    },
    passward:{
      type:String 
    },
    phone:{
      type:String
    },
    age:{
      type:Number  
    },

    
});

const basicdata = mongoose.model('normaldata',schematype);  // create a model of data

module.exports = basicdata;