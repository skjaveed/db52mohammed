var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('school', { title: 'Search Result : School' });
});

module.exports = router;