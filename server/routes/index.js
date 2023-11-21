const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController.js');


//App Routes
router.get('/', mainController.mainPage);
router.get('/about', mainController.about);


module.exports = router;