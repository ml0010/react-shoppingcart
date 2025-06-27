const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    comment: String,
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Tour-Contacts', contactSchema);