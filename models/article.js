const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String
    },
    markdown:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: ()=>Date.now()
    }
});

// now we have a table called Article in DB of schema articleSchema. 

module.exports = mongoose.model('Article', articleSchema)