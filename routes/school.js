var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('school', { title: 'Search Result : School' });
});

/* GET detail school page */ 
router.get('/detail', school_controlers.school_view_one_Page); 
 

module.exports = router;