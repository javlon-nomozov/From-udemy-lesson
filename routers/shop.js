const { Router } = require("express");

const shopController = require("../controllers/shop");

const router = Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProductById);

router.post('/products/:productId/delete')

router.post('/products/:productId/edit')

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
