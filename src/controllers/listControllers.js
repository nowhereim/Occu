const ListServices = require("../services/listServices");

class ListController {
  constructor() {
    this.listServices = new ListServices();
  }

  getLikedlist = async (req, res) => {
    const { id } = req.params;
    const result = await this.listServices.getLikedlist(id);
    res.status(201).send(result);
  };
  getUserlist = async (req, res) => {
    const { id, distance } = req.params;
    const result = await this.listServices.getUserlist(id, distance);
    res.status(201).send(result);
  };

  getMatchlist = async (req, res) => {
    const { id } = req.params;
    const result = await this.listServices.getMatchlist(id);
    res.status(201).send(result);
  };
}
module.exports = ListController;
