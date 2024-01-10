const { join: path } = require("path");
const { Router } = require("express");

const rootDir = require("../utils/path");

const adminController = require("../controllers/admin");
const router = Router();

// @desc      Render add product form
// @route     /admin/add-product
// @controller   UserController
// @file      routes/admin.js
router.get("/add-product", adminController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

// /admin/edit-product/:productId => GET
router.get("/edit-product/:productId", adminController.getEditProduct);

// /admin/edit-product => POST
router.post("/edit-product", adminController.postEditProduct);

// /admin/delete-product => POST
router.post("/delete-product", adminController.postDeleteProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

module.exports = router;
