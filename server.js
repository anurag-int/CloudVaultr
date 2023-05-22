const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require(express.json());
const cloudinary = require('cloudinary').v2;



// Configuration 
cloudinary.config(
    {
        cloud_name: "Anurag'sCloud",
        api_key: "125582343148666" ,
        api_secret : "qN0epvNA2yPeLtS4onDgbaFiOTo" 
    }
);




const file = req.files.file;
cloudinary.uploader.upload(file.tempFilePath, function(error, result){
    if(error){
        console.error(error);
        res.status(500).send("Error uploading file to cloudinary");
    }
    else
    {
        console.log(result);
        res.send("File uploaded to Cloudinary");
    }
});




const PORT = 3000;
app.get("/", (req, res)=>{
    res.send(`<H1>Welcome To Home Page</H1>`);
})


app.listen(PORT, ()=>{
    console.log(`Server Started At port ${PORT}`);
})