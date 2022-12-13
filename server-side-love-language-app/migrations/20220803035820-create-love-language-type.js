"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("LoveLanguageTypes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            howToCommunicate: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            actionsToTake: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            thingsToAvoid: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("LoveLanguageTypes");
    },
};
