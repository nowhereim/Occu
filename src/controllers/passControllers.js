const PassServices = require("../services/passService");

class PassContorollers {
  constructor() {
    this.passServices = new PassServices();
  }
  createPass = async (req, res) => {
    const val = req.body;
    console.log(val);
    res.status(201).send("good");
  };
}

module.exports = PassContorollers;
