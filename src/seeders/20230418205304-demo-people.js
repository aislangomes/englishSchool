'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('people', [
      {
        name: 'Aislan Cesar',
        active: true,
        email: "aislan@aislan.com",
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mirella Sato',
        active: false,
        email: "mirella@sato.com",
        role: "teacher",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Josnei Alves',
        active: false,
        email: "Josnei@Josnei.com",
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fulano Dutra',
        active: true,
        email: "fulano@fulano.com",
        role: "teacher",
        createdAt: new Date(),
        updatedAt: new Date()
      },     
      {
        name: 'Ciclano Lopes',
        active: true,
        email: "ciclano@ciclano.com",
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beltrano Arantes',
        active: true,
        email: "beltrano@beltrano.com",
        role: "teacher",
        createdAt: new Date(),
        updatedAt: new Date()
      },               
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('people', null, {});

  }
};
