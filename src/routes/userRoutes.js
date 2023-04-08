const express = require("express");
const router = express.Router();
const UserControllers = require("../controllers/userControllers");
this.userControllers = new UserControllers();

router.get("/", this.userControllers.getIp);
router.post("/signup", this.userControllers.singUp);
router.post("/signin", this.userControllers.signIn);

module.exports = router;
