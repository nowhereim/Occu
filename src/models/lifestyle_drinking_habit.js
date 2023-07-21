"use strict";
const { Model } = require("sequelize");
const moment = require("moment-timezone");

module.exports = (sequelize, DataTypes) => {
  class Lifestyle_drinking_habit extends Model {
    static associate(models) {
      Lifestyle_drinking_habit.belongsToMany(models.User, {
        through: "user_lifestyle_drinking_habit",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Lifestyle_drinking_habit.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "lifestyle_drinking_habit_id", // 컬럼명 지정
      },
      lifestyle_drinking_habit: DataTypes.STRING,
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
      modelName: "Lifestyle_drinking_habit",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  return Lifestyle_drinking_habit;
};
