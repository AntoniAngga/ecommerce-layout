const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  id_Items : {type:String, require:true},
  id_User : {type:String},
  qty : {type:Number},
  amount : {type:Number}
}, {
  timeStamp : true
})

let Carts = mongoose.model('carts',cartSchema);


module.exports = Carts;