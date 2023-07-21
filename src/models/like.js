"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.User, {
        foreignKey: "sent_user",
        as: "sentUser",
        targetKey: "id",
        onDelete: "no action",
        onUpdate: "no action",
      });
      Like.belongsTo(models.User, {
        foreignKey: "received_user",
        as: "receivedUser",
        targetKey: "id",
        onDelete: "no action",
        onUpdate: "no action",
      });
    }
  }
  Like.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "like_id",
      },
      sent_user: DataTypes.INTEGER,
      received_user: DataTypes.INTEGER,
      sentuser_superlike: { type: DataTypes.BOOLEAN, defaultValue: false },
      receiveduser_boost: { type: DataTypes.BOOLEAN, defaultValue: false },
      //리퀘스트 유저들이 목록에 나열된다.(나를 좋아요 한 인원)
      //일반적인 매칭은 설정한 거리 내의 유저를 랜덤으로 뽑아서 매칭을 시킨다.
      //이미 한번 매칭된적이있거나 매칭을 거절한적이 있는 유저는 매칭되지 않는다.
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Like",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  // Like.sequelize.sync({ alter: false });
  return Like;
};
