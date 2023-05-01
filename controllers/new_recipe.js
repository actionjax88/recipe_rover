exports.getNewRecipe = function (req, res, next) {
  res.render("new_recipe", { title: "Add New Recipe" });
};
