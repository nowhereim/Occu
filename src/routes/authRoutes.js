const express = require("express");
const router = express.Router();
const AuthControllers = require("../controllers/authControllers");
this.authControllers = new AuthControllers();
//FIXME: 엔드포인트 개선필요
router.post("/", this.authControllers.accToken);
module.exports = router;
