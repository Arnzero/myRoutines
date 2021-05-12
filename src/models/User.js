const mongoose = require("mongoose");

//how our Schema looks, describe how our data looks
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: String, //NOT NULL
    lname: String, //NOT NULL
    email: String,
    age: Number,
    password: String,
    role: String,
    activities: [{
        actId: String,
        title: String,
        startDay: String,
        endDay: String,
        startHour: String,
        endHour: String,
        actLength: Number,
    }]
});

module.exports = mongoose.model("User", userSchema);