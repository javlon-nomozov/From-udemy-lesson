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

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
