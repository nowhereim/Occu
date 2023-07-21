"use strict";
const { Model } = require("sequelize");
const moment = require("moment-timezone");

module.exports = (sequelize, DataTypes) => {
  class Lifestyle_exercise_preference extends Model {
    static associate(models) {
      Lifestyle_exercise_preference.belongsToMany(models.User, {
        through: "user_lifestyle_exercise_preference",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Lifestyle_exercise_preference.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "lifestyle_exercise_preference_id", // 컬럼명 지정
      },
      lifestyle_exercise_preference: {
        type: DataTypes.STRING,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        field: "created_at", // 컬럼명 지정
        get() {
          //...
        },
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        field: "updated_at", // 컬럼명 지정
        get() {
          //...
        },
      },
    },
    {
      sequelize,
      modelName: "Lifestyle_exercise_preference",
      tableName: "lifestyle_exercise_preferences", // 테이블 이름 지정
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  return Lifestyle_exercise_preference;
};
