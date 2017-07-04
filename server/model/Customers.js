const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name : {type:String, require:true},
  gender : {type:String},
  email : {type:String},
  birthdate : {type:Date},
  phone : {type:String},
  alamat : {type:String}
}, {
  timeStamp : true
})

let Customers = mongoose.model('customers',customerSchema);


module.exports = Customers;