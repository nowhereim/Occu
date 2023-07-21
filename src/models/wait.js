"use strict";
const { Model } = require("sequelize");
const moment = require("moment-timezone");

module.exports = (sequelize, DataTypes) => {
  class Wait extends Model {
    static associate(models) {
      Wait.belongsTo(models.User, {
        foreignKey: "request_user",
        targetKey: "id",
        onDelete: "no action",
        onUpdate: "no action",
      });
      Wait.belongsTo(models.User, {
        foreignKey: "wait_user",
        targetKey: "id",
        onDelete: "no action",
        onUpdate: "no action",
      });
    }
  }
  Wait.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "wait_id",
      },
      request_user: DataTypes.INTEGER,
      wait_user: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Wait",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  // Wait.sequelize.sync({ alter: true });
  return Wait;
};
