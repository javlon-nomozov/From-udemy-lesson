const { join: path } = require("path");
const express = require("express");

const rootDir = require("./utils/path");

const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
//       views as views / templates
app.set("views", "views");

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path(rootDir, "public")));

const adminData = require("./routers/admin");
const shop = require("./routers/shop");

app.use("/admin", adminData.routes);
app.use(shop);

// app.get("/", (req, res) => {
//   res.send(
//     `<html>
//     <head>
//       <title>Hello from express js server</title>
//     </head>
//     <body>
//       <h1>Hello from express page</h1>
//       <!-- <form method="post" action="/create-user">
//       <input name="name" placeholder="enter your name">
//       <input type="submit" value="Submit">
//       </form>-->
//     </body>
//     </html>`
//   );
// });

app.all("*", (req, res) => {
  res.render("404", { docTitle: "Page Not Found"});
  // res.status(404).sendFile(path(rootDir, "views", "404.html"));
});

const PORT = 3000;
const HOST_NAME = "localhost";

app.listen(PORT, HOST_NAME, () => {
  console.log(`server running on ${HOST_NAME}:${PORT}`);
});
