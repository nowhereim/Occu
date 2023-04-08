const express = require("express");
const router = express.Router();
const Authrouter = require("./authRoutes");
const UserRouter = require("./userRoutes");
const LikeRouter = require("./likeRoutes");
const ListRouter = require("./listRoutes");
const PassRouter = require("./passRoutes");
const ProfileRouter = require("./profileRoutes");
router.use("/user", UserRouter);
router.use("/authtoken", Authrouter);
router.use("/like", LikeRouter);
router.use("/list", ListRouter);
router.use("/pass", PassRouter);
router.use("/profile", ProfileRouter);

module.exports = router;
