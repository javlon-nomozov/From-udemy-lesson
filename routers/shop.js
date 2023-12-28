const {Router}=require('express')

const router = Router()
router.get("/", (req, res, next) => {
  res.send('<h1>Shop page </h1>');
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router