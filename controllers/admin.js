const Product = require("../models/products");

// @desc      View AddProducts to the admin
// @route     GET /admin/add-product
// @access    Public
// @controller   adminController.getAddProduct
module.exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    product: {},
    pageTitle: "Add Product",
    path: req.baseUrl + req.url,
  });
};

// @desc      Add new Product to the base by admin
// @route     POST /admin/add-product
// @access    Private( Admin )
// @controller   adminController.postAddProduct
module.exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(title, imageUrl, description, price).save();
  res.redirect("/");
};

// @desc      View EditProduct to the owner of post
// @route     GET /admin/edit-product/:productId
// @access    Private/ Owner User
// @controller   adminController.getEditProduct
module.exports.getEditProduct = (req, res, next) => {
  const { productId } = req.params;
  Product.fetchAll((products) => {
    const product = products.find((el) => el._id === productId);
    res.render("admin/edit-product", {
      product,
      pageTitle: "Edit Product",
      path: req.baseUrl + req.url,
    });
  });
};

// @desc      Add new Product to the base by admin
// @route     POST /admin/add-product
// @access    Private( Admin )
// @controller   adminController.postEditProduct
module.exports.postEditProduct = (req, res, next) => {
  const { productId: _id, title, imageUrl, description, price } = req.body;
  // const product = new Product(title, imageUrl, description, price).save();
  Product.updateById(_id, title, imageUrl, description, price);
  res.redirect("/");
};

// @desc      Delete product by id
// @route     POST /admin/delete-product {productId}
// @access    Public
// @controller   adminController.getProducts
module.exports.postDeleteProduct = (req, res, next) => {
  const { productId } = req.body;
  Product.deleteProductById(productId);
  res.redirect("/products");
};

// @desc      View All Products to the admin
// @route     POST /admin/product
// @access    Public
// @controller   adminController.getProducts
module.exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: req.baseUrl + req.url,
    });
  });
};
