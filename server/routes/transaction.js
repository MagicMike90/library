const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');


/* GET userController listing. */
router.get('/fake',transactionController.generate_fake_transiations);

module.exports = router;
