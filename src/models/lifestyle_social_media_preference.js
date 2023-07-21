"use strict";
const { Model } = require("sequelize");
const moment = require("moment-timezone");

module.exports = (sequelize, DataTypes) => {
  class Lifestyle_social_media_preference extends Model {
    static associate(models) {
      Lifestyle_social_media_preference.belongsToMany(models.User, {
        through: "user_lifestyle_social_media",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Lifestyle_social_media_preference.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "lifestyle_social_media_preference_id", // 컬럼명 지정
      },
      lifestyle_social_media_preference: DataTypes.STRING,
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
      modelName: "Lifestyle_social_media_preference",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  return Lifestyle_social_media_preference;
};
