var express = require("express");
var router = express.Router();

let newRecipe = require("../controllers/new_recipe");

/* GET about page. */
router.get("/", newRecipe.getNewRecipe);

module.exports = router;
