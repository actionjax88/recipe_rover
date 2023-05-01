var express = require("express");
var router = express.Router();

let about = require("../controllers/about");

/* GET about page. */
router.get("/", about.get_about);

module.exports = router;
