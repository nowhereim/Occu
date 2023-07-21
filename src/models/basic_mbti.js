"use strict";
const { Model } = require("sequelize");
const moment = require("moment-timezone");

module.exports = (sequelize, DataTypes) => {
  class Basic_mbti extends Model {
    static associate(models) {
      Basic_mbti.belongsToMany(models.User, {
        through: "user_basic_mbti",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Basic_mbti.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "basic_mbti_id", // 컬럼명 지정
      },
      basic_mbti: DataTypes.STRING,
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        get() {
          return moment(this.getDataValue("created_at"))
            .tz("Asia/Seoul")
            .format("YYYY-MM-DD HH:mm:ss");
        },
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        get() {
          return moment(this.getDataValue("updated_at"))
            .tz("Asia/Seoul")
            .format("YYYY-MM-DD HH:mm:ss");
        },
      },
    },
    {
      sequelize,
      modelName: "Basic_mbti",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  return Basic_mbti;
};
