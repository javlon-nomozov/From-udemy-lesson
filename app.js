const { join: path } = require("path");
const express = require("express");

const bodyParser = require("body-parser");
const { engine: expressHbs } = require("express-handlebars");

const rootDir = require("./utils/path");

const app = express();

app.engine("hbs", expressHbs({ extname: ".hbs" }));

app.set("view engine", "hbs");
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

app.all("*", (req, res) => {
  res.render("404", { docTitle: "Page Not Found" });
  // res.status(404).sendFile(path(rootDir, "views", "404.html"));
});

const PORT = 3000;
const HOST_NAME = "localhost";

app.listen(PORT, HOST_NAME, () => {
  console.log(`server running on ${HOST_NAME}:${PORT}`);
});
