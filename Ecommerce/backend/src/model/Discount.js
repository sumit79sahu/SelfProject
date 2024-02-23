const sequelize = require("../database/Db");
const { DataTypes } = require("sequelize");

const discount = sequelize.define("discounts", {
  discountId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  minPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  maxPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});




module.exports = discount;