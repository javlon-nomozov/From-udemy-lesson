const { Router } = require("express");

const rootDir = require("../utils/path");
const { products } = require("./admin");

const router = Router();

router.get("/", (req, res, next) => {
  console.log(req.url);
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    activeShop: true,
    productCSS:true
  });
});

module.exports = router;
