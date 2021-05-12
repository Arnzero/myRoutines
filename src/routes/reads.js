const express = require('express');
const router = express.Router();
const User = require('../models/User');


// READ login form
router.get('/login', async (req, res) => {
    try{
        //const users = await User.find();
        const user = "Hi Adrian!";

        res.render("../views/profile/login.ejs",{user})
    }catch(err){
        res.json({message:err})
    }
});

// READ profileEdit
router.get('/profileEdit', async (req, res) => {
    try{
        //const users = await User.find();
        const user = "Hi Adrian!";

        res.render("../views/profile/profileEdit.ejs",{user})
    }catch(err){
        res.json({message:err})
    }
});



// READ registerUserForm
router.get('/registerUser', async (req, res) => {
    try{
        //const users = await User.find();
        const user = "Hi Adrian!";

        res.render("../views/profile/registerUserForm.ejs",{user})
    }catch(err){
        res.json({message:err})
    }
});



// READ routineDaily
router.get('/', async (req, res) => {
    try{
        //const users = await User.find();
        const users = await "Adrian";
        res.render("../views/routines/routineDaily.ejs", {users});
    }catch(err){
        res.json({message:err})
    }
});

// READ routineSetup
router.get('/routineSetup', async (req, res) => {
    try{
       // const users = await User.find();
       const users = await "Adrian";
        res.render("../views/routines/routineSetup.ejs", {users});
    }catch(err){
        res.json({message:err})
    }
});

// READ routineWeek
router.get('/routineWeek', async (req, res) => {
    try{
       // const users = await User.find();
       const users = await "Adrian";
        res.render("../views/routines/routineWeek.ejs", {users});
    }catch(err){
        res.json({message:err})
    }
});

// READ routineWeekEdit
router.get('/routineWeekEdit', async (req, res) => {
    try{
       // const users = await User.find();
       const users = await "Adrian";
        res.render("../views/routines/routineWeekEdit.ejs", {users});
    }catch(err){
        res.json({message:err})
    }
});

// READ routineWeekSample
router.get('/routineSample', async (req, res) => {
    try{
        //const users = await User.find();
       
        const users = await "Adrian";
        res.render("../views/profile/routineWeekSample.ejs",{user})
    }catch(err){
        res.json({message:err})
    }
});


// READ ToDo List
router.get('/toDoList', async (req, res) => {
    try{
        //const users = await User.find();
        const users = await "Adrian";
        res.render("../views/routines/toDoList.ejs", {users});
    }catch(err){
        res.json({message:err})
    }
});



module.exports = router;