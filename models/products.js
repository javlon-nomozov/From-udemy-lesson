const fs = require("fs");
const { join: path } = require("path");
const rootDir = require("../utils/path");

module.exports = class Product {
  constructor(title) {
    this.title = title;
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
