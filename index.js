const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const cloudinary = require('cloudinary').v2;


//middlewares
app.use(express.json());
const fileUpload = require("express-fileupload"); // fileupload is use to upload the data in the server.
app.use(fileUpload);

//connection with Database
const db = require('./config/database');



// Connection with Cloud
require("./config/cloudinary");




// API Routes
const Upload = require("./routes/FileUpload");
app.use('api/users/upload', Upload);


app.listen(PORT, ()=>{
    console.log(`Server Started At port ${PORT}`);
})