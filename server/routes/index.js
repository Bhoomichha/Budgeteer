const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mainController = require("../controller/mainController.js");
const collection = require("../models/loginModel.js");

//App Routes
router.use(express.urlencoded({ extended: true }));
router.get("/", mainController.mainPage);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.post("/register", async (req, res) => {
  const data = {
    name: req.body.username,
    password: req.body.password,
  };
  try {
    // Check if the username already exists in the database
    const existingUser = await collection.findOne({ name: data.name });

    if (existingUser) {
      return res.send(
        "User already exists. Please choose a different username."
      );
    }

    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    data.password = hashedPassword;

    const userData = await collection.insertMany(data);
    console.log(userData);

    // Redirect to the login page after successful signup
    res.redirect("/login");
  } catch (error) {
    // Handle any errors that occur during the signup process
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.username });
    if (!check) {
      return res.send("User name cannot be found");
    }

    // Compare the hashed password from the database with the plaintext password
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      check.password
    );

    if (!isPasswordMatch) {
      return res.send("Wrong password");
    } else {
      // Redirect to the dashboard after successful login
      res.redirect("/dashboard");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
