const {Router}=require('express')

const router = Router()
router.use("/add-product", (req, res, next) => {
  res.send(
    `<html>
      <head>
        <title>Hello from express js server</title>
      </head>
      <body>
        <h1>Hello from express page</h1>
        <form method="post" action="/product">
        <input name="name" placeholder="Product name">
        <input type="submit" value="Submit">
        </form>
      </body>
      </html>`
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router