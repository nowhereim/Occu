const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage(); // 메모리 스토리지 사용
const upload = multer({ storage: storage });
const ProfileControllers = require("../controllers/profileControllers");
const profileControllers = new ProfileControllers();
router.get("/:id", profileControllers.getmyProfile);
router.get("/images/:id", profileControllers.getprofileImage);
router.get("/:me/:other", profileControllers.getProfile);
router.patch("/:id", profileControllers.updateProfile);
router.post(
  "/uploadimage/:id",
  upload.fields([
    { name: "primaryImage", maxCount: 1 },
    { name: "otherImages", maxCount: 1 },
  ]),
  profileControllers.uploadImage,
);
router.delete("/deleteimage/:id", profileControllers.deleteImage);
router.patch("/crimage/:id", profileControllers.crImage);
router.post("/lifestyle/:id", profileControllers.updatelifestyle);
router.post("/basic/:id", profileControllers.updatebasic);
router.post("/interests/:id", profileControllers.updateinterests);

module.exports = router;
