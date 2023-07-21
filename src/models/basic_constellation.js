"use strict";
const { Model } = require("sequelize");
const moment = require("moment-timezone");

module.exports = (sequelize, DataTypes) => {
  class Basic_constellation extends Model {
    static associate(models) {
      Basic_constellation.belongsToMany(models.User, {
        through: "user_basic_constellation",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Basic_constellation.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "basic_constellation_id", // 컬럼명 지정
      },
      basic_constellation: DataTypes.STRING,
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
      modelName: "Basic_constellation",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  return Basic_constellation;
};
