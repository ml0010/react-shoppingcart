const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    reference: String,
    name: String,
    email: String,
    phone: String,
    comment: String,
    tours: Array,
    date: {
        type: Date,
        default: Date.now,
    },
    payment: Number,
});

module.exports = mongoose.model('Tour-Bookings', bookingSchema);