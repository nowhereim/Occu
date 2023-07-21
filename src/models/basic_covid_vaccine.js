"use strict";
const { Model } = require("sequelize");
const moment = require("moment-timezone");

module.exports = (sequelize, DataTypes) => {
  class Basic_covid_vaccine extends Model {
    static associate(models) {
      Basic_covid_vaccine.belongsToMany(models.User, {
        through: "user_basic_covid_vaccine",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }
  Basic_covid_vaccine.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "basic_covid_vaccine_id", // 컬럼명 지정
      },
      basic_covid_vaccine: DataTypes.STRING,
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
      modelName: "Basic_covid_vaccine",
      timestamps: true,
      underscored: true,
      timezone: "+09:00",
    },
  );
  return Basic_covid_vaccine;
};
