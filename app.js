const { join: path } = require("path");
const express = require("express");
// const loggerMiddleware = require('./middlewares/logger');
const bodyParser = require("body-parser");

const rootDir = require("./utils/path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// app.use(loggerMiddleware)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path(rootDir, "public")));

const adminRoute = require("./routers/admin");
const shopRoute = require("./routers/shop");
const errorRoute = require('./routers/404')
app.use("/admin", adminRoute);
app.use(shopRoute);

app.use(errorRoute);

const PORT = 3000;
const HOST_NAME = "localhost";

app.listen(PORT, HOST_NAME, () => {
  console.log(`server running on ${HOST_NAME}:${PORT}`);
});
