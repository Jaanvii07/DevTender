const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://Janvi:janvi123@cluster0.bleumnb.mongodb.net/devTender");
};

module.exports = connectDB;


