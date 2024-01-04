const { Router } = require("express");

const rootDir = require("../utils/path");
const { products } = require("./admin");
const { join: path } = require("path");

const router = Router();

router.get("/", (req, res, next) => {
  console.log({ products });
  res.render("shop", { prods: products, docTitle: "Shop" });
  // res.sendFile(path(rootDir, "views", "shop.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
