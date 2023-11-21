/*
 * Get Homepage
 */

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
 * Get About
 */

exports.about = async (req, res) => {
  const locals = {
    title: "About - Budgeteer",
    description: "App for savings and budgeting",
  };

  res.render("about", locals);
};
