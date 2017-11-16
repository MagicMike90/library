import mongoose from 'mongoose';
import Transaction from "../models/transaction";
import faker from 'faker';


exports.transaction_list = (req, res) => {

  Transaction.aggregate([{
    $match: {
      type: "payment"
    }
  }, {
    "$group": {
      "_id": {
        $month: "$date"
      },
      "total": {
        "$sum": "$amount"
      },
      "count": {
        "$sum": 1
      }
    }
  }]).then(transactions => {
    res.json({
      transactions
    });
  }).catch(err => {
    res.status(500).json({
      message: `Internal Server Error: ${err}`
    });
  });
  // Transaction.aggregate(
  //   [
  //     // Grouping pipeline
  //     {
  //       "$group": {
  //         "_id": '$type',
  //         "total": {
  //           "$sum": "$amount"
  //         }
  //       }
  //     },
  //     // Sorting pipeline
  //     {
  //       "$sort": {
  //         "recommendCount": -1
  //       }
  //     },
  //   ],
  //   function (err, result) {
  //     console.log(result);
  //     // Result is an array of documents
  //   }
  // );

  // Transaction.distinct("date").then(result => {
  //   console.log('distinct', result);
  // }).catch(err => {
  //   console.log('distinct', err);
  // })

  // Transaction.find().then(transations => {
  //   res.json({
  //     transations
  //   });
  // }).catch(err => {
  //   res.status(500).json({
  //     message: `Internal Server Error: ${err}`
  //   });
  // });
};

exports.generate_fake_transiations = function (req, res) {
  var transactions = [];
  for (var i = 0; i < 1000; i++) {
    var temp = faker.helpers.createTransaction();
    temp.date = faker.date.past();
    transactions.push(temp);
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
