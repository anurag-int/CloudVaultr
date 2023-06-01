const express = require('express');
const cloudinary = require('cloudinary');
const File = require('../models/File');
require("dotenv").config();


// for local file upload
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

//function to check wheather the file is in the correct type or not
function isfileTypeSupported(type, supportedTypes)
{   
    return supportedTypes.includes(type);
}


//function to upload file on cloudinary

async function uploadFileToCloudinary(file, folder){
    const options = {folder};
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


// for Image Upload
const imageUpload = async(req, res)=>{
    try{
        //data fetch
        const {name, tags, email,imageFile} = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;

        //validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();
        
        if(!isfileTypeSupported(fileType, supportedTypes))
        {
            return res.status(400).json({
                success : "false",
                message : "File not supported"
            })
        }
        

        //uploading file to cloudinary
        const response = await uploadFileToCloudinary(file, "galaxy");
        console.log(response);


        // saving entries into database
        // const fileData = await File.create({
        //     name,
        //     tags,
        //     email,
        //     imageUrl
        // })

        return res.status(200).json({
            success : "true",
            message : "image successfully Uploaded"
        })
    }
    catch(err){
        console.error(err);
        res.status(400).json({
            success : false,
            message : "Somthing went wrong"
        })
    }
    
}



module.exports = {localFileUpload, imageUpload};


