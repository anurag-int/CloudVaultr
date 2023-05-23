const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    imageUrl:{
        type:String
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }
});

const File = mongoose.model('File', fileSchema);
module.exports = File;