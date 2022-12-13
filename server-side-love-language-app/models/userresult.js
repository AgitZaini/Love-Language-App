"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UserResult extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            UserResult.belongsTo(models.User, { foreignKey: "UserId" });
            UserResult.belongsTo(models.LoveLanguageType, { foreignKey: "TypeId" });
        }
    }
    UserResult.init(
        {
            UserId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "Users",
                    key: "id",
                },
            },
            TypeId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "LoveLanguageTypes",
                    key: "id",
                },
            },
        },
        {
            sequelize,
            modelName: "UserResult",
        }
    );
    return UserResult;
};
