const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get("/", (req, res) => {
    res.send("We are on sub-route DELETES ");
}); 

// DELETE a user profile

// DELETE an Activity
//  wait isn't deleting the same as patches ?
module.exports = router;