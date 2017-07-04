const express = require('express');
const router = express.Router();
const cCustomers = require("../contoller/cCustomers");

/* GET home page. */
router.get('/:_id', cCustomers.customerFind);

router.post('/', cCustomers.customerAdd);

module.exports = router;
