const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const serveIndex = require('serve-index');
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
//const bodyParser = require('body-parser');
const auth = require("./auth.js");
const cors = require('cors');

//hide our mongoDB login
//  installed .env dependency
require('dotenv/config');

//middleware for our req.body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allows for cross domain api's
app.use(cors());

//Import Routes
const postsRoute = require('./routes/posts');

//Middleware for posts
app.use('/posts', postsRoute);

app.get("/", (req, res) => {
    res.send("We are on on home");
});


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true},
     () =>{
    console.log("Connected to DB!")
})



app.listen(3000);