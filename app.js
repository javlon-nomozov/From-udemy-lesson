const { join: path } = require("path");
const express = require("express");

const bodyParser = require("body-parser");

const rootDir = require("./utils/path");

const app = express();

app.set("view engine", "ejs");
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

app.all("*", (req, res) => {
  res.render("404", {
    docTitle: "Page Not Found",
    path: req.baseUrl + req.url,
  });
});

const PORT = 3000;
const HOST_NAME = "localhost";

app.listen(PORT, HOST_NAME, () => {
  console.log(`server running on ${HOST_NAME}:${PORT}`);
});
