const mongoose = require("mongoose");
require('dotenv').config();


const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URL || "mongodb://localhost:27017/mydaily";
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
