const express = require("express");
const router = express.Router();
const LikeControllers = require("../controllers/likeControllers");
const likecontrollers = new LikeControllers();

router.post("/", likecontrollers.createLike);

module.exports = router;
