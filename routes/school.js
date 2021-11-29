var express = require('express');
var school_controlers =require('../controllers/school')
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }

/* GET home page. */
router.get('/', school_controlers.school_view_all_Page );


/* GET detail school page */ 
router.get("/detail", school_controlers.school_view_one_Page); 

router.get('/create',secured, school_controlers.school_create_Page); 

router.get('/update',secured, school_controlers.school_update_Page);

router.get('/delete',secured, school_controlers.school_delete_Page);
 

module.exports = router;