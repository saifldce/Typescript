const express = require("express");
const controller = require("./controller");
const router = express.Router();

router.route("/mutual/:id").get(controller.mutualFriend);

router.route("").get(controller.list);


module.exports = router;
