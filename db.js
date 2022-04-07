const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/myData?readPreference=primary&directConnection=true&ssl=false"

const connection = () => {
    mongoose.connect(mongoURI, () => {
        console.log("mongoDB is connected")
    });
};

module.exports = connection;