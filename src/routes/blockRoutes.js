const express = require("express");
const router = express.Router();
const BlockControllers = require("../controllers/blockControllers");
this.blockControllers = new BlockControllers();

router.post("/", this.blockControllers.createBlock);

module.exports = router;
