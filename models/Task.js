const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    done: Boolean,
    content: String,
    created_at: Date,
    id: mongoose.Schema.ObjectId
})