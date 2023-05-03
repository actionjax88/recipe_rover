var express = require("express");
var router = express.Router();

let view = require("../controllers/view_recipe");

/* GET about page. */
router.get("/", view.getView);

module.exports = router;
