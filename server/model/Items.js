const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name_item : {type:String, require:true},
  category : {type:String},
  desc : {type:String},
  image : {type:String},
  amount : {type:Number}
}, {
  timeStamp : true
})

let Items = mongoose.model('items',itemSchema);


module.exports = Items;