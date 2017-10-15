const faker = require("faker");
module.exports = function () {

  var data = {}
  var books = [];
  for (var i = 0; i < 100; i++) {

    var book = {
      id: i,
      title: faker.lorem.words(),
      author: faker.name.findName(),
      author_image: faker.image.avatar(),
      release_date: faker.date.recent(),
      image: faker.image.abstract(),
      price: faker.commerce.price(),
      short_description: faker.lorem.sentence(),
      long_description: faker.lorem.paragraph()
    }
    books.push(book);
  }
  data.books = books;
  return data;
}
