const { AuthenticationError } = require("apollo-server-express");
const { User, bookSchema } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        getAllBooks: async () => {
            const books = await bookSchema.find();
            return books;
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate(
                    "savedBooks"
                );
                return user;
            }
            throw new AuthenticationError("You are not currently logged in.");
        },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("That username does not exist in our database.");
            }
            const correctPw = await user.correctPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("You entered an invalid user email or password.");
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        saveBook: async (parent, { newBook }, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    context.user._id,
                    { $push: { savedBooks: newBook } },
                    { new: true }
                ).populate("savedBooks");
                return user;
            }
            throw new AuthenticationError("You are not currently logged in.");
        },
        deleteBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    context.user._id,
                    { $pull: { savedBooks: { bookId } } },
                    { new: true }
                ).populate("savedBooks");
                return user;
            }
            throw new AuthenticationError("You are not currently logged in.");
        },
    },
};

module.exports = resolvers;