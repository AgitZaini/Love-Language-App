"use strict";
const { typeOfLoveLanguage } = require("../soal.json");
module.exports = {
    async up(queryInterface, Sequelize) {
        let data = typeOfLoveLanguage.map((data) => {
            data.createdAt = new Date();
            data.updatedAt = new Date();
            // delete data.id;
            return data;
        });
        await queryInterface.bulkInsert("LoveLanguageTypes", data);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("LoveLanguageTypes", null, {});
    },
};
