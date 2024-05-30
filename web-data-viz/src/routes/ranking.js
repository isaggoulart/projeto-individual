var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get("/verRanking", function (req, res) {
    rankingController.verRanking(req, res);
});


module.exports = router;