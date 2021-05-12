const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');


// POST new user profile



//GET ALL USERS
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        //res.json(user);
        res.render("../views/routines/routineSetup.ejs", {users});
    }catch(err){
        res.json({message:err})
    }
});

//POST NEW "POST" *************** THIS IS EXAMPLE REMOVE ME ***************
router.post('/',  (req, res) => {
    //create object
   // console.log(req.body);
   const post = new Post({
       title: req.body.title,
       description: req.body.description
   });

   post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    })
});

//POST NEW USER
router.post('/newUser', async (req, res) => {
    // create new user
    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        age: req.body.age,
        //password: req.body.password,
        role: req.body.role,
        activities: req.body.activities
    });

    try{
        const savedUser = await user.save();
         res.json(savedUser);
    }catch(err){
        res.json({message:err})
    }

});

//GET SPECIFIC POST?  //dynamic parameter
router.get('/:userId', async (req,res) => {
    console.log(req.params);
    const user = await User.findById(req.params.userId);
    try{
        res.json(user);
    }catch(err){
        res.json({message:err});
    }
});

//Delete specific User
router.delete('/:userId', async (req,res) => {
    try{
        const removedUser = await User.remove({_id: req.params.userId});
        res.json(removedUser);

    }catch(err){ 
        res.json({message:err});

    }
});

// Update a user
router.patch('/:userId', async (req, res) => {
    try{
        const updatedUser = await User.updateOne(
            {_id: req.params.userId},
            { $set: {lname:req.body.lname} }
        );
        res.json(updatedUser);

    }catch(err){ 
        res.json({message:err});

    }
})
module.exports = router;