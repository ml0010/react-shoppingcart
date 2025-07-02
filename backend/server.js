const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
const Contacts = require('./Models/Contact');
const Bookings = require('./Models/Booking');
const Users = require('./Models/User');

// test
app.get('/', async(req, res) => {
    res.json("SERVER CONNECTED");
});

// add new user
app.post("/join", async(req, res) => {
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
    console.log("NEW USER");
    console.log(result);
});
// check email already used
app.get('/check/email/:email/', async(req, res) => {
    const email = req.params.email;
    console.log("CHECKING EMAIL VALIDITY: " + email);
    try {
        const user = await Users.findOne({email: email});
        //console.log(user);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// check username already exists as a user
app.get('/check/username/:username/', async(req, res) => {
    const username = req.params.username;
    console.log("CHECKING USERNAME VALIDITY: " + username);
    try {
        const user = await Users.findOne({username: username});
        //console.log(user);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// login
app.post('/login', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("LOGIN ATTEMPT USER: " + username);
    try {
        const user = await Users.findOne({username: username, password: password});
        console.log(user);
        res.send(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// edit user's email address
app.get('/:username/edit/email/:email', async(req, res) => {
    const username = req.params.username;
    const email = req.params.email;

    try {
        const user = await Users.updateOne({username: username}, {email: email});
        console.log("USERNAME " + username + "'s EMAIL UPDATED:" + email);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// edit user's telephone
app.get('/:username/edit/telephone/:telephone', async(req, res) => {
    const username = req.params.username;
    const telephone = req.params.telephone;

    try {
        const user = await Users.updateOne({username: username}, {telephone: telephone});
        console.log("USERNAME " + username + "'s TELEPHONE UPDATED:" + telephone);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// edit user's password
app.get('/:username/edit/password/:password', async(req, res) => {
    const username = req.params.username;
    const password = req.params.password;

    try {
        const user = await Users.updateOne({username: username}, {password: password});
        console.log("USERNAME " + username + "'s PASSWORD UPDATED:" + password);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// check current password
app.get('/:username/confirm/password/:password', async(req, res) => {
    const username = req.params.username;
    const password = req.params.password;
    console.log("CHCKING IF USER CAN CONFIRM PASSWORD: " + username);
    try {
        const user = await Users.findOne({username: username, password: password});
        //console.log(user);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// refresh
app.get('/refresh/:username', async(req, res) => {
    const username = req.params.username;
    console.log("REFRESHING USER INFO: " + username);
    try {
        const user = await Users.findOne({username: username});
        //console.log(user);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
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

// add booking reference to User's account
app.get('/booking/:username/add/:reference', async(req, res) => {
    const username = req.params.username;
    const bookingReference = req.params.reference;

    try {
        const user = await Users.updateOne({username: username}, {$push: {booking: bookingReference}});
        console.log("BOOKING " + bookingReference + " ADDED TO USERNAME:" + username);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
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
        const user = await Users.updateOne({booking: bookingReference}, {$pull: {booking: bookingReference}});
        console.log("BOOKING " + bookingReference + " DELETED");
        console.log(user);
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


