exports.getDashboard = function (req, res, next) {
  res.render("dashboard", { title: "Recipe Dashboard" });
};
