const mongoose = require('mongoose');
// console.log(mongoose);

const schema  = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  brand:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  stocks:{
    type:Number,
    required:true,
    default:0,
  },
  image:[
    {
      type:String,
    },
  ],
  numreview:{
    type:Number,
    default:0,
  },
},
{timestamps:true}
  );

  const productdata = mongoose.model('product',schema);

  module.exports = productdata;