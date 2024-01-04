const { join: path } = require("path");
const { Router } = require("express");

const rootDir = require("../utils/path");

const router = Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  console.log(products);
  res.sendFile(path(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
