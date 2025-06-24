const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
const Contacts = require('./Models/Contact');
const Bookings = require('./Models/Booking');

// test
app.get('/', async(req, res) => {
    res.json("SERVER CONNECTED");
});

// submit contact to db
app.post("/contact", async(req, res) => {
    let contact = new Contacts(req.body);
    let result = await contact.save();
    res.send(result);
    console.log("CONTACT FORM SUBMIT");
    //console.log(result);
});

// submit booking info to db
app.post("/booking", async(req, res) => {
    let booking = new Bookings(req.body);
    let result = await booking.save();
    res.send(result);
    console.log("BOOKING FORM SUBMIT");
    //console.log(result);
});

// load booking confirmation information
app.get('/confirmation/:reference', async(req, res) => {
    const bookingReference = req.params.reference;
    try {
        const booking = await Bookings.findOne({reference: bookingReference}).exec();
        console.log("BOOKING CONFIRMATION LOADED");
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// delete booking
app.get('/confirmation/:reference/delete', async(req, res) => {
    const bookingReference = req.params.reference;
    try {
        const booking = await Bookings.findOneAndDelete({reference: bookingReference});
        console.log("BOOKING " + bookingReference + " DELETED");
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// edit booking
app.get('/confirmation/:reference/edit', async(req, res) => {
    const bookingReference = req.params.reference;
    try {
        const booking = await Bookings.findOneAndUpdate({reference: bookingReference}, {name: 'name edited', comment: 'edited'}, {new: true});
        console.log("BOOKING " + bookingReference + " EDITED");
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



// phone number update
app.get('/confirmation/:reference/editphone/:phone', async(req, res) => {
    const bookingReference = req.params.reference;
    const newPhone = req.params.phone;
    try {
        const booking = await Bookings.findOneAndUpdate({reference: bookingReference}, {phone: newPhone}, {new: true});
        console.log("BOOKING " + bookingReference + " EDITED");
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// comment update
app.get('/confirmation/:reference/editcomment/:comment', async(req, res) => {
    const bookingReference = req.params.reference;
    const newComment = req.params.comment;
    try {
        const booking = await Bookings.findOneAndUpdate({reference: bookingReference}, {comment: newComment}, {new: true});
        console.log("BOOKING " + bookingReference + " EDITED");
        res.json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(4000, () => {
    console.log("Console is running on port 4000");
});


