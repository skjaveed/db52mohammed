var school = require('../models/school');

// for a specific Gas.
exports.school_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: school detail: ' + req.params.id);
};
// Handle Gas create on POST.
exports.school_create_post = async function (req, res) {
    console.log(req.body)
    let document = new school();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Name = req.body.Name;
    document.Address = req.body.Address;
    document.School_ID = req.body.School_ID;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Gas delete form on DELETE.
// Handle school delete on DELETE.
exports.school_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await school.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle Gas update form on PUT.
exports.school_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: school update PUT' + req.params.id);
};

// List of all Gass
exports.school_list = async function (req, res) {
    try {
        theschool = await school.find();
        res.send(theschool);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.school_view_all_Page = async function (req, res) {
    try {
        theschool = await school.find();
        res.render('school', {
            title: 'school Search Results',
            results: theschool
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific school.
exports.school_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await school.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

   // for a specific school.
exports.school_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await school.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle school update form on PUT.
exports.school_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await school.findById( req.params.id)
 // Do updates of properties
 if(req.body.Name)
 toUpdate.Name = req.body.Name;
 if(req.body.Address) toUpdate.Address = req.body.Address;
 if(req.body.School_ID) toUpdate.School_ID = req.body.School_ID;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

 // Handle a show one view with id specified by query 
 exports.school_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await school.findById( req.query.id) 
        res.render('schooldetail',  
{ title: 'school Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 