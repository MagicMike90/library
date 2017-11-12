import mongoose from 'mongoose';
import Transaction from "../models/transaction";
import faker from 'faker';

exports.generate_fake_transiations = function (req, res) {
  var gender = ['Male', 'Female'];
  var transactions = [];
  for (var i = 0; i < 1000; i++) {
    var transaction = faker.helpers.createTransaction();
    transactions.push(transaction);
  }
  Transaction.insertMany(transactions).then(docs => {
      res.json({
        docs
      });
    })
    .catch(error => {
      console.error(`error: ${error}`);
    });
};
