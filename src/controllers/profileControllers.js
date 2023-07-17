const ProfileServices = require("../services/profileServices");
const logger = require("../../utils/logger");

class ProfileControllers {
  constructor() {
    this.profileServices = new ProfileServices();
  }
  getmyProfile = async (req, res) => {
    const { id } = req.params;
    const result = await this.profileServices.getmyProfile(id);
    if (result.error) return res.status(400).send(result);
    res.status(201).send(result);
  };

  getProfile = async (req, res) => {
    console.log("설마 일로오는거임?");
    const { me, other } = req.params;
    const result = await this.profileServices.getProfile(me, other);
    console.log(result);
    res.status(201).send(result);
  };

  getprofileImage = async (req, res) => {
    const { id } = req.params;
    console.log("일로오는거맞음?");
    const result = await this.profileServices.getprofileImage(id);
    res.status(201).send(result);
  };

  uploadImage = async (req, res) => {
    try {
      const { id } = req.params;
      const primaryImage =
        req.files && req.files.primaryImage ? req.files.primaryImage[0] : null;
      const otherImages =
        req.files && req.files.otherImages ? req.files.otherImages[0] : null;
      console.log(primaryImage, otherImages);
      if (primaryImage) {
        const uploadImage = await this.profileServices.uploadImage(
          id,
          primaryImage,
        );
        if (uploadImage.error) return res.status(400).send({ uploadImage });

        res.status(200).send({ msg: "uploadImage" });
      } else if (otherImages) {
        const uploadImage = await this.profileServices.uploadImage(
          id,
          otherImages,
        );
        if (uploadImage.error) return res.status(400).send({ uploadImage });

        res.status(200).send({ msg: "uploadImage" });
      }
    } catch (error) {
      logger.error(error);
      res.status(400).json({ message: error.message });
    }
  };

  deleteImage = async (req, res) => {
    const { id } = req.params;
    const { url } = req.body;
    const result = await this.profileServices.deleteImage(id, url);
    if (result.error) return res.status(400).send(result);
    res.status(201).send(result);
  };

  crImage = async (req, res) => {
    try {
      const { id } = req.params;
      const images = req.body;
      const patchImages = await this.profileServices.crImage(id, images);
      if (patchImages.error) return res.status(400).send({ patchImages });
      res.status(200).send({ msg: patchImages });
    } catch (error) {
      logger.error(error);
      res.status(400).json({ message: error.message });
    }
  };

  updateProfile = async (req, res) => {
    const { id } = req.params;
    const val = req.body;
    const result = await this.profileServices.updateProfile(id, val);
    res.status(201).send(result);
  };

  updatelifestyle = async (req, res) => {
    const { id } = req.params;
    const val = req.body;
    const result = await this.profileServices.updatelifestyle(id, val);
    res.status(201).send(result);
  };
  updatebasic = async (req, res) => {
    const { id } = req.params;
    const val = req.body;
    const result = await this.profileServices.updatebasicInfo(id, val);
    res.status(201).send(result);
  };
  updateinterests = async (req, res) => {
    const { id } = req.params;
    const val = req.body;
    const result = await this.profileServices.updateinterests(id, val);
    res.status(201).send(result);
  };
}

module.exports = ProfileControllers;
