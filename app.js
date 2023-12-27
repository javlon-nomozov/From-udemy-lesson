const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product',(req,res,next)=>{
  console.log(req.body)
  res.redirect('/')
})

app.get("/", (req, res) => {
  res.send(
    `<html>
    <head>
      <title>Hello from node js server</title>
    </head>
    <body>
      <h1>Hello From my Node.js server</h1>
      <form method="post" action="/create-user">
      <input name="name" placeholder="enter your name">
      <input type="submit" value="Submit">
      </form>
    </body>
    </html>`
  );
});

app.post("/create-user", (req, res) => {
  const { name: user } = req.body;
  console.log({ user });
  users.push(user);
  res.redirect("/users");
});

app.get("/users", (req, res) => {
  let result = "<h1>Users</h1>\n<ul>\n";
  users.forEach((el) => (result = result.concat("  <li>", el, "</li>\n")));
  result += "</ul>";
  console.log(result);
  res.send(result);
});

const PORT = 3000;
const HOST_NAME = "localhost";

app.listen(PORT, HOST_NAME, () => {
  console.log(`server running on ${HOST_NAME}:${PORT}`);
});
