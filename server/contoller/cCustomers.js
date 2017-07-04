const Customers = require("../model/Customers");

let customerFind = function(req,res){
    Customers.findById(req.params._id, function(err,data){
      if (err) {
        res.status(503).send(`Account Not Found`);
      } else {
        res.send(data)
      }
    })
}

let customerAdd = function(req,res){
  let data = req.body;
  let newCustomer = Customers({
    name : data.name,
    gender : data.gender,
    email : data.email,
    birthdate : data.birthdate,
    phone : data.phone,
    alamat : data.alamat
  });
  newCustomer.save(function(err) {
    if(err){
      res.status(504).send(`Something Wrong wiht your insert`);
    } else {
      res.send("1 Document Inseted")
    }
  })
}

module.exports = {
  customerAdd,
  customerFind
}