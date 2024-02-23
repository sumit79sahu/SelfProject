'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('discounts', { 
      discountId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      discount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      minPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('discounts');
  }
};
