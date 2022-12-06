const express = require("express");
const router = express.Router();

const authRoutes = require("../controllers/auth/routes");

// user api routes

router.use("/auth", authRoutes);

module.exports = router;
