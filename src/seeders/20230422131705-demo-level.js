'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('levels', [
      {
        desc_level: 'basic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_level: 'intermediary',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_level: 'advanced',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_level: 'conversation',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_level: 'support',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('levels', null, {});
  }
};
