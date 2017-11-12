import mongoose from 'mongoose';
import Transaction from "../models/transaction";
import faker from 'faker';


exports.transaction_list = (req, res) => {
  Transaction.find().then(transations => {
    res.json({
      transations
    });
  }).catch(err => {
    res.status(500).json({
      message: `Internal Server Error: ${err}`
    });
  });
};

exports.generate_fake_transiations = function (req, res) {
  var transactions = [];
  for (var i = 0; i < 1000; i++) {
    transactions.push(faker.helpers.createTransaction());
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
