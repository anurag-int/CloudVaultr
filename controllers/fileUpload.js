const File = require('../models/File');



const localFileUpload = (req, res)=>{
    try{
        // fetching file from the user
        const file = req.files.file;
        console.log("Your File is : ", file);
        
        let path = __dirname + "/files/" + Date.now();
        
        file.mv(path, (err)=>{
            console.log(err);
        });
        res.json({
            success : true,
            message : 'Local File uploaded Successfully'
        });

    }
    catch(err)
    {
        res.status(404).json({message : "File not Uploaded!"});
        console.log(err);
    }
}

module.exports = localFileUpload;
