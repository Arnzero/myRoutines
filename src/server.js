const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const serveIndex = require('serve-index');// to display our index files
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const auth = require("./auth.js");
const cors = require('cors'); //allow for cross origin api calls

//hide our mongoDB login
//  installed .env dependency
require('dotenv/config');

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true}
);

const db = mongoose.connection;
db.on("error", () => console.error("connection error"));
db.once("open",() => {
    // MIDDLEWARES
    app.use(cors()); //allows for cross domain api's
    app.set("views",__dirname + "/views");
    app.set("view-engine", "ejs");
    app.use(express.urlencoded({ extended: false})); //access vars inside our posts??
    app.use(express.static(path.join(__dirname, "views")));
    app.use(express.json()); //json our body content
    app.use(cookieParser());
    app.use((req,res,next) => {
        // MAKE OUR COOKIE PER SESSION
        if (!req.cookies.session) {
            var r = Math.random().toString();
            res.cookie("session", r.substring(2));
          }

          next();
    });

    // Import Routes -- 
    const postsRoute = require('./routes/posts');
    app.use('/post', postsRoute); //Middleware for posts

    // Let's make a route for each of C.R.U.D.

    // Reads Route AKA GET
    const readRoute = require('./routes/reads');
    app.use('/read', readRoute);

    // Deletes Route
    const deleteRoute = require('./routes/deletes');
    app.use('/delete', deleteRoute);

    // Patches Route AKA UPDATE
    const patchRoute = require('./routes/patches');
    app.use('/patch', patchRoute);

    app.get("/", (req, res) => {
        res.send("We are on on home");
    });     

})



app.listen(port, () => {
    console.log("Listening on port " + port + "...");
  });