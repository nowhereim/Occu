const logger = require("../../utils/logger");
const axios = require("axios");
const UserServices = require("../services/userServices");
class UserControllers {
  constructor() {
    this.userServices = new UserServices();
  }

  getIp = async (req, res, next) => {
    try {
      const response = await axios.get("https://ipapi.co/json");
      const data = await this.userServices.getIp(response);
      return res.status(200).send({
        data,
      });
    } catch (error) {
      logger.error(error.name);
      logger.error(error.message);
      return res.status(401).send({
        errorname: error.name,
        message: error.message,
      });
    }
  };

  signIn = async (req, res, next) => {
    try {
      const val = req.body;
      const user = await this.userServices.signIn(val);
      return res.status(200).send({
        message: user,
      });
    } catch (error) {
      logger.error(error.name);
      logger.error(error.message);
      return res.status(401).send({
        errorname: error.name,
        message: error.message,
      });
    }
  };

  singUp = async (req, res, next) => {
    try {
      const val = req.body;
      const response = await axios.get("https://ipapi.co/json");
      const { latitude, longitude } = response.data;
      console.log(latitude, longitude);
      const user = await this.userServices.singUp(latitude, longitude, val);
      return res.status(200).send({
        message: user,
      });
    } catch (error) {
      logger.error(error.name);
      logger.error(error.message);
      return res.status(401).send({
        errorname: error.name,
        message: error.message,
      });
    }
  };
}

module.exports = UserControllers;
