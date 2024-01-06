const router = require("express").Router();

const users = [];

router.get("/", (req, res) => {
  res.render("home", {});
});

router.post("/add-user", (req, res) => {
  const { username } = req.body;
  users.push({ name: username });
  console.log(users);
  res.redirect('/users')
});

router.get("/users", (req, res) => {
  res.render("users", { users });
});

module.exports = router;
