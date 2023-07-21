"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Profile_image extends Model {
    static associate(models) {
      Profile_image.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        onDelete: "no action", // belongsTo에서 cascad
        onUpdate: "no action",
      });
    }
  }
  Profile_image.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "profile_imageid",
      },
      user_id: DataTypes.INTEGER,
      url: DataTypes.STRING,
      is_primary: DataTypes.BOOLEAN,
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Profile_image",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  return Profile_image;
};
