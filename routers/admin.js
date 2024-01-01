const {join:path} = require('path')
const {Router}=require('express')

const router = Router()
router.use("/add-product", (req, res, next) => {
  res.sendFile(path(__dirname,'..','views','add-product.html'))
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router