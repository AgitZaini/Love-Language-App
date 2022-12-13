"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.UserResult, { foreignKey: "UserId" });
        }
    }
    User.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { message: "name cannot be null" },
                    notEmpty: { message: "name cannot be null" },
                },
            },
            email: {
                type: DataTypes.STRING,
                unique: { message: "Email is already exists" },
                allowNull: false,
                validate: {
                    notNull: { message: "email cannot be null" },
                    notEmpty: { message: "email cannot be null" },
                    isEmail: { message: "Invalid email format" },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: { message: "password cannot be null" },
                    notEmpty: { message: "password cannot be null" },
                },
            },
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    User.addHook("beforeCreate", (user) => {
        user.password = hashPassword(user.password);
    });
    return User;
};
