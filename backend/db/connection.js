const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Successfully connected to MongoDB")).catch((error)=>console.log("Couldn't connect to MongoDB"));