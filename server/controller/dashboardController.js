const { reset } = require("nodemon");
const Saving = require("../models/savings.js");
const mongoose = require("mongoose");

/**
 * GET /
 * Dashboard
 */
exports.dashboard = async (req, res) => {
  let perPage = 4;
  let page = req.query.page || 1;

  const locals = {
    title: "Home - Budgeteer ",
    description: "App for savings and budgeting.",
  };

  try {
    const saving = await Saving.aggregate([
      { $sort: { updatedAt: -1 } },
      { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
      {
        $project: {
          title: { $substr: ["$title", 0, 50] },
          body: { $substr: ["$body", 0, 100] },
          amount: { $substr: ["$amount", 0, 100] },
          deposit: { $substr: ["$deposit", 0, 100] },
          remaining: { $substr: ["$deposit", 0, 100] },
        },
      },
    ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Saving.countDocuments({
      user: new mongoose.Types.ObjectId(req.user.id),
    });

    res.render("dashboard/index", {
      userName: req.user.firstName,
      locals,
      saving,
      layout: "../views/layouts/dashboard",
      current: page,
      pages: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);
  }
};

// Get and view specific saving

exports.dashboardViewSavings = async (req, res) => {
  const saving = await Saving.findById({ _id: req.params.id })
    .where({
      user: req.user.id,
    })
    .lean();

  if (saving) {
    res.render("dashboard/view-savings", {
      savingID: req.params.id,
      saving,
      layout: "../views/layouts/dashboard",
    });
  } else {
    res.send("Something Went Wrong.");
  }
};

// PUT or Update Specific Saving
exports.dashboardUpdateSavings = async (req, res) => {
  try {
    await Saving.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        body: req.body.body,
        amount: req.body.amount,
        deposit: req.body.deposit,
        remaining: req.body.remaining,
        updatedAt: Date.now(),
      }
    ).where({ user: req.user.id });

    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

// Delete Saving Goals

exports.dashboardDeleteSavings = async (req, res) => {
  try {
    await Saving.deleteOne({ _id: req.params.id }).where({ user: req.user.id });
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

//Get and Add Saving goal
exports.dashboardAddSavings = async (req, res) => {
  res.render("dashboard/add", {
    layout: "../views/layouts/dashboard",
  });
};

// Post and save the new goal
exports.dashboardSubmitSavings = async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Saving.create(req.body);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
