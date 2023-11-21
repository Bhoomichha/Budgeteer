const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/checkAuth.js");
const dashboardController = require("../controller/dashboardController.js");

/*
 * Dashboard Routes
 */
router.get("/dashboard", isLoggedIn, dashboardController.dashboard);
router.get(
  "/dashboard/item/:id",
  isLoggedIn,
  dashboardController.dashboardViewSavings
);
router.put(
  "/dashboard/item/:id",
  isLoggedIn,
  dashboardController.dashboardUpdateSavings
);
router.delete(
  "/dashboard/item-delete/:id",
  isLoggedIn,
  dashboardController.dashboardDeleteSavings
);
router.get(
  "/dashboard/add",
  isLoggedIn,
  dashboardController.dashboardAddSavings
);
router.post(
  "/dashboard/add",
  isLoggedIn,
  dashboardController.dashboardSubmitSavings
);

module.exports = router;
