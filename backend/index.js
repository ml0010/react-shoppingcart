const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
const Contacts = require('./Models/Contact');
const Bookings = require('./Models/Booking');

app.post("/contact", async(req, res) => {
    let contact = new Contacts(req.body);
    let result = await contact.save();
    res.send(result);
    console.log("CONTACT FORM SUBMIT");
    console.log(result);
});

app.post("/booking", async(req, res) => {
    let booking = new Bookings(req.body);
    let result = await booking.save();
    res.send(result);
    console.log("BOOKING FORM SUBMIT");
    console.log(result);
});

app.listen(4000, () => {
    console.log("Console is running on port 4000");
});


