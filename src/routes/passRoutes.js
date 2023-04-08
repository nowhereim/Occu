const express = require("express");
const router = express.Router();
const PassControllers = require("../controllers/passControllers");
const passControllers = new PassControllers();

router.post("/", passControllers.createPass);

module.exports = router;
