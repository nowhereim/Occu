const LikeServices = require("../services/likeServices");

class LikeControllers {
  constructor() {
    this.likeServices = new LikeServices();
  }

  createLike = async (req, res) => {
    const { likekey, superlike, boost } = req.body;
    console.log(likekey, superlike);
    const result = await this.likeServices.createLike(
      likekey,
      superlike,
      boost,
    );
    console.log(result);
    if (result.err) {
      res.status(400).json({ err: result.err });
      return;
    }
    res.status(201).json({ result: result });
  };
}

module.exports = LikeControllers;
