const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://zainabsaiyed97:12345@bookstore.spbzq.mongodb.net/')

const db = mongoose.connection;

db.on("connected", (err)=>{
    if (err) {
        console.error("Error connecting to database");
        return false;
    }
    console.log("Connected to database");
});

module.exports = db;