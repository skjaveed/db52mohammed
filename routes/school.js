var express = require('express');
var school_controlers =require('../controllers/school')
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('school', { title: 'Search Result : School' });
});

/* GET detail school page */ 
router.get("/detail", school_controlers.school_view_one_Page); 

router.get('/create', school_controlers.school_create_Page); 
 

module.exports = router;