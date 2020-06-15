const mongoose = require('mongoose');       // import mongoose
const Schema = mongoose.Schema;

// create product schema
const ProductSchema = new Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('Product', ProductSchema);