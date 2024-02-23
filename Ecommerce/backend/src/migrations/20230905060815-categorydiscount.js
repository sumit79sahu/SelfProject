'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categorydiscounts', 
      {
        categoryId:
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'categories', 
            key: 'categoryId'
          },
          allowNull:false
        },
        discountId:
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'discounts', 
            key: 'discountId'
          },
          allowNull:false
        }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categorydiscounts');
  }
};
