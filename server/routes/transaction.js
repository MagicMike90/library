import express from 'express';
import transactionController from '../controllers/transactionController';

const router = express.Router();

/* GET userController listing. */
router.get('/', function (req, res, next) {
  transactionController.transaction_list(req, res, next);
  //res.end(userController.list);
});
router.get('/report', function (req, res, next) {
  transactionController.transaction_report(req, res, next);
  //res.end(userController.list);
});

module.exports = router;
