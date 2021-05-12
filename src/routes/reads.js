const express = require('express');
const router = express.Router();
const User = require('../models/User');


// READ profileEdit


// READ registerUserForm



// READ routineDaily
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
       
        res.render("../views/routines/routineDaily.ejs", {users});
    }catch(err){
        res.json({message:err})
    }
});

// READ routineSetup
router.get('/routineSetup', async (req, res) => {
    try{
        const users = await User.find();
        
        res.render("../views/routines/routineSetup.ejs", {users});
    }catch(err){
        res.json({message:err})
    }
});

// READ routineWeek
router.get('/routineWeek', async (req, res) => {
    try{
        const users = await User.find();
       
        res.render("../views/routines/routineWeek.ejs", {users});
    }catch(err){
        res.json({message:err})
    }
});

// READ routineWeekEdit
router.get('/routineWeekEdit', async (req, res) => {
    try{
        const users = await User.find();

        res.render("../views/routines/routineWeekEdit.ejs", {users});
    }catch(err){
        res.json({message:err})
    }
});
module.exports = router;