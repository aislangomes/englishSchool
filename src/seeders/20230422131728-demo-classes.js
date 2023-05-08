'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('classes', [
      {
        date_start: '2023-02-02',
        level_id: 1,
        teacher_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date_start: '2023-02-02',
        level_id: 2,
        teacher_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date_start: '2023-02-16',
        level_id: 3,
        teacher_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date_start: '2023-03-02',
        level_id: 4,
        teacher_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date_start: '2023-01-08',
        level_id: 5,
        teacher_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('classes', null, {});
  }
};
