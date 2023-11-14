const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');


//App Routes
router.get('/', mainController.mainPage);
router.get('/homepage', mainController.homePage);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.post('/register', mainController.register);

  module.exports = router;