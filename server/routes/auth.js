var express = require('express');
var router = express.Router();


var userController = require('../controllers/userController');

// Set up the 'signin' routes
router.post('/signin', userController.signin);

router.post('/signup', userController.signup);


module.exports = router;
