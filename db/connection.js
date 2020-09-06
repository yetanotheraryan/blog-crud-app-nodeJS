const mongoose = require("mongoose");

const URI = 'mongodb+srv://dbuser:dbuser@blog-basic.pkkml.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("DB connected!");
}

module.exports = connectDB;