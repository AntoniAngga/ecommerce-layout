const express = require('express');
const router = express.Router();
const cItems = require("../contoller/cItems");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Items', cItems.showItems);

module.exports = router;
