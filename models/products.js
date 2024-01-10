const { v4: uuid } = require("uuid");
const fs = require("fs");
const { join: path } = require("path");
const rootDir = require("../utils/path");

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
    const p = path(rootDir, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      console.log({ this: this });
      products.push(this);
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
        console.log(1, { result });
      } else {
        console.log(err);
      }
      cb(result);
    });
  }
};
