const mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const eventSchema = new Schema({
    title: String,
    startDay: String,
    endDay: String,
    startHour: String,
    endHour: String,
    actLength: Number,
    
})