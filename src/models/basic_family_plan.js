"use strict";
const { Model } = require("sequelize");
const moment = require("moment-timezone");

module.exports = (sequelize, DataTypes) => {
  class Basic_family_plan extends Model {
    static associate(models) {
      Basic_family_plan.belongsToMany(models.User, {
        through: "user_basic_family_plan",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Basic_family_plan.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "basic_family_plan_id", // 컬럼명 지정
      },
      basic_family_plan: DataTypes.STRING,
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
      modelName: "Basic_family_plan",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  return Basic_family_plan;
};
