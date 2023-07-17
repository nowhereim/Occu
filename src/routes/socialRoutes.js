const express = require("express");
const router = express.Router();
const SocialControllers = require("../controllers/socialControllers");
const socialControllers = new SocialControllers();

router.post("/oauth/callback", socialControllers.kakaoCallback);

router.post("/nauth/callback", socialControllers.naverCallback);

router.post("/gauth/callback", socialControllers.googleCallback);

module.exports = router;
