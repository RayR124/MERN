const { books } = require('../models')

module.exports = {
    Query: {
        getAllBooks: async () => {
            const allBooks = await bookSchema.find({});
            return allBooks;
        }
    }
}