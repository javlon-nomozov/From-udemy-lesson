const { v4: uuid } = require("uuid");
const fs = require("fs");
const { join: path } = require("path");
const rootDir = require("../utils/path");

const p = path(rootDir, "data", "carts.json");

// @desc      Define the Cart model schema
// @model     Product
// @file      models/products.js
// @database  JSON file
module.exports = class Cart {
  //   constructor() {
  //     this._id = uuid();
  //     this.products = [];
  //     this.toTotalPrice = 0;
  //   }

  static addProduct(id, productPrice) {
    // Cart ni avvalgi holatini olib
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Cartni analiz qilib/ qiymatini ko'tariladi
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      // Yangi mahsulot qo'shiladi
      if (existingProduct) {
        existingProduct.qty += 1;
      } else {
        cart.products.push({ id, qty: 1 });
      }
      cart.totalPrice += +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
