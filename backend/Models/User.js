const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    telephone: String,
    username: String,
    password: String,
    booking: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Tour-Users', userSchema);