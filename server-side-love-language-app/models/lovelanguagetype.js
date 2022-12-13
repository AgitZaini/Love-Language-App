"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class LoveLanguageType extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            LoveLanguageType.hasMany(models.UserResult, { foreignKey: "TypeId" });
        }
    }
    LoveLanguageType.init(
        {
            name: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            howToCommunicate: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            actionsToTake: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            thingsToAvoid: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
            description: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notNull: true,
                    notEmpty: true,
                },
            },
        },
        {
            sequelize,
            modelName: "LoveLanguageType",
        }
    );
    return LoveLanguageType;
};
