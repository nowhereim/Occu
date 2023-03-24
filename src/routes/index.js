const express = require("express");
const router = express.Router();
const Authrouter = require("./authRoutes");

router.use("/authtoken", Authrouter);

module.exports = router;
