export class Book {

    constructor(public id?: number,
        public title?: string,
        public author?: string,
        public author_image?: string,
        public release_date?: string,
        public image?: string,
        public short_description?: string,
        public long_description?: string) { }
}


// var book = {
//     title: faker.lorem.words(),
//     author: faker.name.findName(),
//     author_image: faker.image.avatar(),
//     release_date: faker.date.recent(),
//     image: faker.image.abstract(),
//     price: faker.commerce.price(),
//     short_description: faker.lorem.sentence(),
//     long_description: faker.lorem.paragraph()
// }