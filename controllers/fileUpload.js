const express = require('express');
const File = require('../models/File');



const localFileUpload = async(req, res)=>{
    try{
        // fetching file from the request
        const file = req.files.file;
        console.log("Your File is : ", file);
        
        //create path where file need to be stored on server
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
           //    present dir + file dir , rename the file + extension.
        console.log("Path-->", path);

        //add your file into your chosen directory.
        file.mv(path, (err)=>{
            console.log(err);
        });

        //create a successful response
        res.json({
            success : true,
            message : 'Local File uploaded Successfully'
        });

    }
    catch(err)
    { 
        console.log("Not able to upload file on server.")
        res.status(404).json({message : "File not Uploaded!"});
        console.log(err);
    }
}

module.exports = localFileUpload;
