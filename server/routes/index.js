const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');


//App Routes
router.get('/', mainController.mainPage);
router.get('/login', mainController.login);


  module.exports = router;