const express = require('express');
const app = express();



require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware 
app.use(express.json());
const fileupload = require("express-fileupload"); // fileupload is use to upload the data in the server.
app.use(fileupload());


//connection with Database
const db = require('./config/database');


//connection with cloud.
const cloudinary = require("./config/cloudinary");



app.get("/", (req, res)=>{
    console.log("Home route");
    res.send(`<h1>Home Page</h1>`);

    return res.json({
        message : "Welcome to home page!"
    })
})

// API Routes
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);


app.listen(PORT, (req, res)=>{
    console.log(`Server Started At port ${PORT}`);
})

module.exports = app;