const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./db/connection');
const Contacts = require('./Models/Contact');

app.post("/contact", async(req, res) => {
    let contact = new Contacts(req.body);
    let result = await contact.save();
    res.send(result);
    console.log("CONTACT FORM SUBMIT");
    console.log(result);
});

app.listen(4000, () => {
    console.log("Console is running on port 4000");
});


