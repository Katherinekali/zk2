var express = require('express');
var router = express.Router();
var { addMoney, delMoney } = require("./income")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/api/addMoney', addMoney);
router.post('/api/delMoney', delMoney);

module.exports = router;