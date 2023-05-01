var express = require("express");
var router = express.Router();

let dashboard = require("../controllers/dashboard");

/* GET about page. */
router.get("/", dashboard.getDashboard);

module.exports = router;
