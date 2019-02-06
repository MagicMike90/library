const mongoose = require('mongoose');

//Define BookSchema with title, description and category
const BookSchema = mongoose.Schema({
    title: {
        type: string,
        required: true
    },
    description: string,
    category: {
        type: string,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
});

module.exports = mongoose.model('book', BookSchema );

