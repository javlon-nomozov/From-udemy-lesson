const { join: path } = require("path");
const express = require("express");

const bodyParser = require("body-parser");
const rootDir = require("./utils/path");

const app = express();

app.set("view engine", "pug");
app.set("views", "templates");

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path(rootDir, "public")));

const usersRoute = require('./routers/users')

app.use(usersRoute)

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
