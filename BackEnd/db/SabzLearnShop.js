const mysql = require("mysql");

const SabzlearnShopDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sabzlearn_shop",
    port: 3307
});

module.exports = SabzlearnShopDB;
