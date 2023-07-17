const logger = require("./utils/logger");
const dotenv = require("dotenv");
dotenv.config();

const MongoClient = require("mongodb").MongoClient;
const uri = process.env.DB_HOST;
const db = new MongoClient(uri, {
  useNewUrlParser: true, // 새로운 URL 파서를 사용합니다.
  useUnifiedTopology: true, // 새로운 토폴로지 엔진을 사용합니다.
});
db.connect().then(() => {
  logger.info("몽고디비 연결완료");
});

const collection = db.db("OccuChats").collection("chats");

module.exports = collection;
