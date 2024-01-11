const express = require("express");
const mongoose = require("mongoose");
const RegistrationModel = require("./model/RegisterSchema");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/form");

app.use(cors());
app.use(bodyParser.json());

app.post("/add-form", async (req, res) => {
  const { username, email, password, phone, address } = req.body;

  const newUser = new RegistrationModel({
    username,
    email,
    password,
    phone,
    address,
  });
  await newUser.save();

  res.status(201).json({ message: "User registered successfully" });
});

app.listen(3001, (req, res) => {
  console.log("Server is running on port 3001");
});
