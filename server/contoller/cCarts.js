const Carts = require(`../model/Carts`);

let CartsFind = function(req,res){
  Carts.findById(req.params.id, function(err,data) {
    if (err) {
      res.status(504).send(`Carts Find Something problem in findById`);
    } else {
      res.send(data);
    }
  })
};

let Carts = function(req,res)