const PassServices = require("../services/passService");

class PassContorollers {
  constructor() {
    this.passServices = new PassServices();
  }
  createPass = async (req, res) => {
    const val = req.body;
    const result = await this.passServices.createPass(val);
    res.status(201).send(result);
  };
}

module.exports = PassContorollers;
