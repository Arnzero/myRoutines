const express = require('express');
const serveIndex = require('serve-index');
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const auth = require("./auth.js");

const User = require("./models/User.js");

const app = express();
const port = process.env.PORT || 5000;

/* NOTES:
//middleware default
app.use((req,res,next) => {
    console.log('Time: ', Date.now());
    next();
});

//middleware specific
app.use('/request-type', (req, res, next) => {
    console.log('Request type: ', req.method);
    next();
})

//static files server using middleware
app.use('/public', express.static('public'));
app.use('/public', serveIndex('public'));

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));
*/

//




const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://arnzero:jWUO7WzElUTEgyPL@cluster0.tgokx.mongodb.net/wkly_actis?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object

  app.get("/test", (req, res) => 
        {
            User.find({}, function(err, data){
                if(err){
                    console.log(err);
                    return
                }
                 console.log(data);
                 res.render("./routines/routines.ejs",{data:data});

                
            
                if(data.length == 0) {
                    console.log("No record found")
                    return
                }

               
            
                
            })
        }
    );

  app.listen(port, () => {
    console.log("Listening on port " + port + "...");
});
  client.close();
});



//

/* idk what i'm doing!

mongoose.connect(
    "mongodb+srv://arnzero:jWUO7WzElUTEgyPL@cluster0.tgokx.mongodb.net/wkly_actis?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  );


 const db = mongoose.connection;
  db.on("error", () => console.error("connection error"));
  db.once("open", () => {
    app.set("views", __dirname + "/views");
    app.set("view-engine", "ejs");
    app.use(express.urlencoded({ extended: false })); // we wanna be able to access varaibles inside our posts reqs
    app.use(express.static(path.join(__dirname, "views")));
    app.use(express.json());
    app.use(cookieParser());
    app.use((req, res, next) => {
        if (!req.cookies.session) {
          var r = Math.random().toString();
          res.cookie("session", r.substring(2));
        }
    
        next();
    });

    app.get("/", (req, res) => {
        res.redirect("/test");
    });

    app.get("/test", (req, res) => 
        {
            User.find({}, function(err, data){
                if(err){
                    console.log(err);
                    return
                }
                 console.log(data);
                 res.render("./routines/routines.ejs",{data:data});

                
            
                if(data.length == 0) {
                    console.log("No record found")
                    return
                }

               
            
                
            })
        }
    );

    app.get("/events", (req, res) => {

        Event.find({ date: { $gte: today } }).sort("date").sort("time").exec((err, events) => {
           
      
            User.findById(auth.sessions[req.cookies.session], (err, user) => {
              if (err) {
                console.log(err.message);
                
              }
              else {
                res.render("./week/week.ejs", { events: events });
              }
            });
          });
        });



    app.listen(port, () => {
        console.log("Listening on port " + port + "...");
    });
});

*/

