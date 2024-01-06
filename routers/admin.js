const { join: path } = require("path");
const { Router } = require("express");

const rootDir = require("../utils/path");

const productController = require("../controllers/product");
const router = Router();


router.get("/add-product", productController.getAddProduct);

router.post("/add-product", productController.postAddProduct);

module.exports = router;
