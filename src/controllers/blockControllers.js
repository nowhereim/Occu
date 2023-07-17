const BlockUserServices = require("../services/blockServices");
class BlockUser {
  constructor() {
    this.bolckuserServices = new BlockUserServices();
  }
  createBlock = async (req, res) => {
    const val = req.body;
    const result = await this.bolckuserServices.createBlock(val);
    res.status(200).send(result);
  };
}

module.exports = BlockUser;
