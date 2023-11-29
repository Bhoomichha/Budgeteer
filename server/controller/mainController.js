/*
 * Get Homepage
 */

const { collection } = require("../models/savings");

exports.mainPage = async (req, res) => {
  const locals = {
    title: "Budgeteer",
    description: "App for savings and budgeting",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/front-page.ejs",
  });
};
/*
  Get Login
*/
exports.login = async (req, res) => {
  const locals = {
    title: "Log In",
    description: "Log in form to start budgeteer",
  };

  res.render("login", locals);
};
/*
  Get register
*/
exports.register = async (req, res) => {
  const locals = {
    title: "Sign Up",
    description: "Sign up form to start budgeteer",
  };

  res.render("register", locals);
};
exports.registerGet = async (req, res) => {
  const data = {
    firtsname: req.body.firstName,
    lastname: req.body.lastName,
    password: req.body.password,
  };

  const userdata = await collection.insertMany(data);
  console.log(userdata);
};
