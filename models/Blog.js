const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const blogSchema = new Schema({
    title: String,
    slug: String,
    published: Boolean,
    author: String,
    content: String,
    contentTwo: String,
    contentThree: String,
    contentFour: String,
    tags: [String],
    createdAt: Date,
    updatedAt: Date
})

module.exports = mongoose.model("Blog", blogSchema);