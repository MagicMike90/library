var faker = require("faker");
var db = new Mongo("mongodb://michael:michael@ds149905.mlab.com:49905/").getDB('store');


for (let i = 0; i < 1000; i++) {
  let transation = faker.helpers.createTransaction();
  db.transations.insert(transation);
}