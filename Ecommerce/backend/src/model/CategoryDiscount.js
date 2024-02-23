const sequelize = require("../database/Db");
const { DataTypes } = require("sequelize");
const discount = require("./Discount");
const category= require("./Category");

const CategoryDiscount = sequelize.define("categorydiscounts", {
  categoryId:
  {
    type: DataTypes.INTEGER,
    references: {
      model: category, 
      key: 'categoryId'
    },
    allowNull:false
  },
  discountId:
  {
    type: DataTypes.INTEGER,
    references: {
      model: discount, 
      key: 'discountId'
    },
    allowNull:false
  }
});


category.belongsToMany(discount,{through:CategoryDiscount})
discount.belongsToMany(category,{through:CategoryDiscount})
module.exports = CategoryDiscount;
