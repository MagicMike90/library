const faker = require("faker");
// module.exports = function () {

//   var data = {}
//   var books = [];
//   for (var i = 0; i < 100; i++) {

//     var book = {
//       id: i,
//       title: faker.lorem.words(),
//       author: faker.name.findName(),
//       author_image: faker.image.avatar(),
//       release_date: faker.date.recent(),
//       image: faker.image.abstract(),
//       price: faker.commerce.price(),
//       short_description: faker.lorem.sentence(),
//       long_description: faker.lorem.paragraph()
//     }
//     books.push(book);
//   }
//   data.books = books;
//   return data;
// }
module.exports = function () {

  var products = [];
  for (var i = 0; i < 100; i++) {
    var color = faker.commerce.color();
    var department  = faker.commerce.department();
    var price  = faker.commerce.price();
    var category  = faker.commerce.product();
    products.push({color,department, price,category});
  }


  var transactions = [];
  for (var i = 0; i < 100; i++) {
    var transaction = faker.helpers.createTransaction();
    transaction.country = faker.address.country();
    transactions.push(transaction);
  }

  return {
      transactions:transactions,
      products:products,
      heroes: [
        { id: 0, name: 'Zero' },
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ]
  }
}
