var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var school_controller = require('../controllers/school');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// gas ROUTES ///
// POST request for creating a gas.
router.post('/resource/school', school_controller.school_create_post);
// DELETE request to delete gas.
router.delete('/resource/school/:id', school_controller.school_delete);
// PUT request to update gas.
router.put('/resource/school/:id', school_controller.school_update_put);
// GET request for one gas.
router.get('/resource/school/:id', school_controller.school_detail);
// GET request for list of all gas items.
router.get('/resource/school', school_controller.school_list);
module.exports = router;

// GET request for one costume.
router.get('/school/:id', school_controller.school_detail);