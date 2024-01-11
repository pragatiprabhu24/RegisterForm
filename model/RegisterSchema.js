const mongoose = require("mongoose");
mongoose.pluralize(null);

const RegisterSchema = new mongoose.Schema({
  username: String,
  password: String,
  phone: String,
  email: String,
  address: String,
});

const RegistrationModel = mongoose.model("registerdata", RegisterSchema);

module.exports = RegistrationModel;


// when we give collection name in singular form it automatically create database in plural form
