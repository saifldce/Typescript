const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middlewares/authetication");

const authRoutes = require("../controllers/auth/routes");
const userRoutes = require("../controllers/user/routes");
const requestRoutes = require("../controllers/request/routes");

// user api routes

router.use("/auth", authRoutes);
router.use("/user",isAuthenticated(), userRoutes);
router.use("/request",isAuthenticated(), requestRoutes);

module.exports = router;
