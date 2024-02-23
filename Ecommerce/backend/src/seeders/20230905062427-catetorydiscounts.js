'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categorydiscounts', [
      {
        "categoryId": 1,
        "discountId": 1
      },
      {
        "categoryId": 1,
        "discountId": 2
      },
      {
        "categoryId": 1,
        "discountId": 3
      },
      {
        "categoryId": 1,
        "discountId": 4
      },
      {
        "categoryId": 1,
        "discountId": 5
      },
      {
        "categoryId": 2,
        "discountId": 2
      },
      {
        "categoryId": 2,
        "discountId": 1
      },
      {
        "categoryId": 2,
        "discountId": 3
      },
      {
        "categoryId": 2,
        "discountId": 4
      },
      {
        "categoryId": 2,
        "discountId": 5
      },
      {
        "categoryId": 3,
        "discountId": 1
      },
      {
        "categoryId": 3,
        "discountId": 2
      },
      
      {
        "categoryId": 3,
        "discountId": 3
      },
      {
        "categoryId": 3,
        "discountId": 4
      },
      {
        "categoryId": 3,
        "discountId": 5
      },
      {
        "categoryId": 4,
        "discountId": 1
      },
      {
        "categoryId": 4,
        "discountId": 2
      },
      {
        "categoryId": 4,
        "discountId": 3
      },
      {
        "categoryId": 4,
        "discountId": 4
      },
      {
        "categoryId": 4,
        "discountId": 5
      },
      {
        "categoryId": 5,
        "discountId": 3
      },      {
        "categoryId": 5,
        "discountId": 2
      },      {
        "categoryId": 5,
        "discountId": 1
      },      {
        "categoryId": 5,
        "discountId": 4
      },
      {
        "categoryId": 5,
        "discountId": 5
      },
      {
        "categoryId": 6,
        "discountId": 1
      },
      {
        "categoryId": 6,
        "discountId": 2
      },
      {
        "categoryId": 6,
        "discountId": 3
      },
      {
        "categoryId": 6,
        "discountId": 4
      },
      {
        "categoryId": 6,
        "discountId": 5
      }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categorydiscounts', null, {});
  }
};
