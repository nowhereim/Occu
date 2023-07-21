"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {
    static associate(models) {
      Matches.belongsTo(models.User, {
        foreignKey: "sent_user",
        as: "sentUser",
        targetKey: "id",
        onDelete: "no action",
        onUpdate: "no action",
      });
      Matches.belongsTo(models.User, {
        foreignKey: "received_user",
        as: "receivedUser",
        targetKey: "id",
        onDelete: "no action",
        onUpdate: "no action",
      });
    }
  }
  Matches.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "match_id",
      },
      sent_user: DataTypes.INTEGER,
      received_user: DataTypes.INTEGER,
      roomkey: DataTypes.UUID,
      sentuser_superlike: { type: DataTypes.BOOLEAN, defaultValue: false },
      receiveduser_boost: { type: DataTypes.BOOLEAN, defaultValue: false },

      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Matches",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  // Matches.sequelize.sync({ alter: true });
  return Matches;
};
