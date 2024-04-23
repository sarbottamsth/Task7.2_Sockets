let express = require('express');
let router = express.Router();

// Importing add and get function from the controller
let { addWatchItem, getWatchItems } = require('../controllers/controller');


// Routing the get and post request into functions
router.post('/submit', addWatchItem);
router.get('/api/items', getWatchItems);

module.exports = router;
