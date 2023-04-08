const logger = require("../../utils/logger");
const redis = require("../../utils/redis");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const getAsync = promisify(redis.get).bind(redis);
const verify = (token) => {
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch (e) {
    if (e) {
      return false;
    }
  }
};
class AssetControllers {
  constructor() {}

  accToken = async (req, res, next) => {
    try {
      //TODO: 요구사항이 바뀌는중 .. 수정 대기중
      const { token } = req.body;
      const decoded = jwt.decode(token);
      const resultacc = await getAsync(`${decoded.email}acc`);
      if (resultacc !== token)
        return res.sendStatus(401).send({
          errorMessage: "The last issued token does not match.",
        });

      const result = await getAsync(`${decoded.email}ref`);
      if (result === null) {
        return res.sendStatus(401).send({
          errorMessage: "The refresh token has expired. Please login again.",
        });
      } else {
        const refreshVerify = verify(result);
        if (refreshVerify === false) {
          return res.sendStatus(401).send({
            errorMessage: "The refresh token has expired. Please login again.",
          });
        } else {
          const decoded = jwt.decode(result);
          const token = jwt.sign(
            {
              email: decoded.email,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30s",
            },
          );
          redis.set(`${decoded.email}acc`, token);
          //TODO: 요구사항이 바뀌는중 .. 수정 대기중
          // res.cookie("token", token, {
          //   httpOnly: true,
          //   secure: true,
          //   sameSite: "none",
          // });
          return res.sendStatus(200).send({
            token: token,
          });
        }
      }
    } catch (error) {
      logger.error(error.name);
      logger.error(error.message);
      return res.sendStatus(401).send({
        errorname: error.name,
        message: error.message,
      });
    }
  };
}

module.exports = AssetControllers;
