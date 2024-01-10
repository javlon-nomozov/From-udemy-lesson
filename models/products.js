const { v4: uuid } = require("uuid");
const fs = require("fs");
const { join: path } = require("path");
const rootDir = require("../utils/path");

const p = path(rootDir, "data", "products.json");

// @desc      Define the Product model schema
// @model     Product
// @file      models/products.js
// @database  JSON file
module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this._id = uuid();
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static updateById(id, title, imageUrl, description, price) {
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      } else {
        console.log(err);
      }
      let foundProduct;
      products = products.filter((el) => {
        console.log({ el });
        console.log({ elId: el._id });
        console.log({ id });
        console.log(el._id !== id);
        if (el._id !== id) {
          return true;
        }
        foundProduct = el;
      });
      products.push({ _id: id, title, imageUrl, description, price });
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static deleteProductById(id) {
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      } else {
        console.log(err);
      }
      let foundProduct;
      products = products.filter((el) => {
        console.log({ el });
        console.log({ elId: el._id });
        console.log({ id });
        console.log(el._id !== id);
        if (el._id !== id) {
          return true;
        }
        // foundProduct = el;
      });
      // products.push({ _id: id, title, imageUrl, description, price });
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const p = path(rootDir, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      let result = [];
      if (!err) {
        result = JSON.parse(fileContent);
      } else {
        console.log(err);
      }
      cb(result);
    });
  }
};
