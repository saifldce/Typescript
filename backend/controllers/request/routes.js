const express = require("express");
const controller = require("./controller");
const {validate} = require("express-validation")
const validation = require("./validation")
const router = express.Router();

router.route("/suggestion").get(controller.suggestionList);

router.route("").get(controller.list);

router.put("/:id", validate(validation.create,{},{}),controller.request);
module.exports = router;
