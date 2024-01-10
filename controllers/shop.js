const Product = require("../models/products");
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    console.log({ products });
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: req.baseUrl + req.url,
    });
  });
};

exports.getProductById = async (req, res, next) => {
  const { productId } = req.params;
  const products = await Product.fetchAll((products) => {
    const product = products.find((el) => el._id === productId);
    res.render("shop/product-detail", {
      product,
      pageTitle: product.title,
      path: req.baseUrl + req.url,
    });
  });
};

exports.getIndex = (req, res) => {
  const products = Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: req.baseUrl + req.url,
    });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", {
    pageTitle: "Your Cart",
    path: req.baseUrl + req.url,
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: req.baseUrl + req.url,
  });
};

exports.postCart = async (req, res, next) => {
  const { productId } = req.body;
  console.log(productId);
  const products = await Product.fetchAll((products) => {
    const product = products.find((el) => el._id === productId);
    Cart.addProduct(productId, product.price);
  });
  res.redirect("/cart");
};
