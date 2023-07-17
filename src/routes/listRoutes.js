const express = require("express");
const router = express.Router();
const ListControllers = require("../controllers/listControllers");
const listControllers = new ListControllers();

router.get("/liked/:id", listControllers.getLikedlist);
router.get("/userlist/:id/:distance", listControllers.getUserlist);
router.get("/matchedlist/:id", listControllers.getMatchlist);
router.get("/chatlist/:key", listControllers.getChatlist);

module.exports = router;
