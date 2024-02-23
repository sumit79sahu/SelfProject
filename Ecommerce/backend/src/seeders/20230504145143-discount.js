'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('discounts', [{
      discountId: 1,
      discount: 15,
      minPrice: 1000,
      maxPrice: 2000
    },
    {
      discountId: 2,
      discount: 20,
      minPrice: 2000,
      maxPrice: 3000
    },
    {
      discountId: 3,
      discount: 5,
      minPrice: 500,
      maxPrice: 1000
    },
    {
      discountId: 4,
      discount: 25,
      minPrice: 3000,
      maxPrice: 10000
    },
    {
      discountId: 5,
      discount: 30,
      minPrice: 10000,
      maxPrice: 30000
    }

    ], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('discounts', null, {});
  }
};
