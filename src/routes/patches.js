const express = require('express');
const router = express.Router();
const User = require('../models/User');

// UPDATE profile

// UPDATE routineWeek (add new activity)
router.get("/", (req, res) => {
    res.send("We are on sub-route PATCH ");
}); 


// UPDATE "TODO List"

module.exports = router;