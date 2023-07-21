"use strict";
const { Model } = require("sequelize");
const moment = require("moment-timezone");

module.exports = (sequelize, DataTypes) => {
  class Interest_tags extends Model {
    static associate(models) {
      Interest_tags.belongsToMany(models.User, {
        through: "user_interest_tags",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Interest_tags.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "interest_tags_id", // 컬럼명 지정
      },
      interest_tag: DataTypes.STRING,
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
      modelName: "Interest_tags",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  return Interest_tags;
};
