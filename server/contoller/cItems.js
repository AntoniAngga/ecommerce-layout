const Items = require('../model/Items');

let showItems = function(req,res){
  Items.find({}, function(err,data) {
        if(err){
            res.status(501).send(`something wrong with your connection`);
        } else {
            res.send(data);
        }
    });
}

module.exports = {
  showItems
}