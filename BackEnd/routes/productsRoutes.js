const express = require("express");
const SabzlearnShopDB = require("./../db/SabzLearnShop");

const productsRouter = express.Router();

// routes

productsRouter.get("/", (req, res) => {
    console.log("get products");
    let selectAllProductsQuery = `SELECT * FROM Products`;
    SabzlearnShopDB.query(selectAllProductsQuery, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: "Failed to fetch products" });
        } else {
            res.status(200).json(result); 
        }
    });
});

productsRouter.delete("/:productID", (req, res) => {
    let productID = req.params.productID;

    let deleteProductQuery = `DELETE FROM Products WHERE id = ${productID}`;

    SabzlearnShopDB.query(deleteProductQuery, (err, result) => {
        if (err) {
            console.error("Error executing query:", err);
            res.status(500).json({ error: 'Failed to delete product' });
        } else {
            if (result.affectedRows === 0) {
                console.log("No product found with ID:", productID);
                res.status(404).json({ message: 'Product not found' });
            } else {
                console.log("Product deleted successfully with ID:", productID);
                res.status(200).json({ message: 'Product deleted successfully' });
            }
        }
    });
});



productsRouter.put("/:productID", (req, res) => {
    let body = req.body;
    let productID = req.params.productID;

    let updateProductQuery = `UPDATE Products SET title="${body.title}", price=${body.price}, count=${body.count} ,img="${body.img}",popularity=${body.popularity},sale=${body.sale},colors=${body.colors} WHERE id = ${productID}`;
    SabzlearnShopDB.query(updateProductQuery, (err, result) => {
        if (err) {
            console.log(err);
            res.send(null);
        } else {
            res.send(result);
        }
    });
});

productsRouter.post("/", (req, res) => {
    let body = req.body;
    let addNewProductQuery = `INSERT INTO Products VALUES (NULL, "${body.title}", ${body.price}, ${body.count}, "${body.img}", ${body.popularity}, ${body.sale}, ${body.colors})`;

    SabzlearnShopDB.query(addNewProductQuery, (err, result) => {
        if (err) {
            console.log(err);
            res.send(null);
        } else {
            res.send(result);
        }
    });
});

module.exports = productsRouter;
