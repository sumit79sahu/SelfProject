const product = require('../model/Product')
const category = require('../model/Category')
const sequelize = require("../database/Db");

const getProducts =
{
    path: '/api/products',
    method: 'get',
    handler: async (req, res) => {
        try {
            const result = await product.findAll({ include: category });
            res.json(result);
        } catch (error) {
            res.sendStatus(404);
        }
    }
}

const getProductById =
{
    path: '/api/product/:id',
    method: 'get',
    handler: async (req, res) => {
        try {
            const result = await sequelize.query(`
            SELECT
              c.category,
              p.categoryId,
              p.productId,
              p.productTitle,
              p.productDescription,
              p.productImage,
              p.productPrice AS actualPrice,
              COALESCE(d.discount, 0) AS discount,
              CASE
                WHEN d.discount IS NOT NULL THEN p.productPrice - (p.productPrice * d.discount / 100)
                ELSE p.productPrice
              END AS discountedPrice
            FROM
              categories AS c
            JOIN
              products AS p ON c.categoryId = p.categoryId
            LEFT JOIN
              discounts AS d ON p.productPrice > d.minPrice AND p.productPrice <= d.maxPrice
              WHERE
              p.productId = ${req.params.id}
      
            ORDER BY
              c.category, p.productId;
          `);

            const [results, metadata] = result;
            res.json(results);
        } catch (error) {
            console.log(error)
            res.sendStatus(404);
        }
    }
}
const getProductByCategory =
{
    path: '/api/product/category/:id',
    method: 'get',
    handler: async (req, res) => {
        try {
            const result = await sequelize.query(`
            SELECT
              c.category,
              p.categoryId,
              p.productId,
              p.productTitle,
              p.productDescription,
              p.productImage,
              p.productPrice AS actualPrice,
              COALESCE(d.discount, 0) AS discount,
              CASE
                WHEN d.discount IS NOT NULL THEN p.productPrice - (p.productPrice * d.discount / 100)
                ELSE p.productPrice
              END AS discountedPrice
            FROM
              categories AS c
            JOIN
              products AS p ON c.categoryId = p.categoryId
            LEFT JOIN
              discounts AS d ON p.productPrice > d.minPrice AND p.productPrice <= d.maxPrice
              WHERE
              c.categoryId = ${req.params.id}
      
            ORDER BY
              c.category, p.productId;
          `);

            const [results, metadata] = result;
            res.json(results);
        } catch (error) {
            console.log(error)
            res.sendStatus(404);
        }
    }
}


module.exports = { getProducts, getProductById, getProductByCategory }




