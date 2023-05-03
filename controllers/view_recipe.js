exports.getView = function (req, res, next) {
  res.render("view_recipe", { title: "Recipe Rover" });
};
