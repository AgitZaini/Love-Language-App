"use strict";
const { Soal } = require("../soal.json");
module.exports = {
    async up(queryInterface, Sequelize) {
        let data = Soal.map((data) => {
            data.createdAt = new Date();
            data.updatedAt = new Date();
            // delete data.id;
            return data;
        });
        await queryInterface.bulkInsert("Soals", data);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Soals", null, {});
    },
};
