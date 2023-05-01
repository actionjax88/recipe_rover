exports.getView = function (req, res, next) {
  res.render("view", { title: "Recipe Rover" });
};
