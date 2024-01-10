const Product = require("../models/products");

// @desc      View AddProducts to the admin
// @route     GET /admin/add-product
// @access    Public
// @controller   adminController.getAddProduct
module.exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: req.baseUrl + req.url,
  });
};

// @desc      Add new Product to the base by admin
// @route     POST /admin/add-product
// @access    Public
// @controller   adminController.postAddProduct
module.exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(title, imageUrl, description, price).save();
  res.redirect("/");
};

// @desc      View All Products to the admin
// @route     POST /admin/product
// @access    Public
// @controller   adminController.getProducts
module.exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    console.log({ products });
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: req.baseUrl + req.url,
    });
  });
};
