const Product = require("../models/products");

module.exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: req.baseUrl + req.url,
  });
};

module.exports.postAddProduct = async (req, res, next) => {
  const product = await new Product(req.body.title).save();
  console.log({ product });
  res.redirect("/");
};

module.exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll((products) => {
    console.log({ products });
    res.render("shop", {
      prods: products,
      docTitle: "Shop",
      path: req.baseUrl + req.url,
    });
  });
};
