const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/CRUD";

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database connected");
  } catch (e) {
    console.log("Database connection error");
  }
};

module.exports = connectdb;
