const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routers/admin'))
app.use(require('./routers/shop'))

app.get("/", (req, res) => {
  res.send(
    `<html>
    <head>
      <title>Hello from express js server</title>
    </head>
    <body>
      <h1>Hello from express page</h1>
      <!-- <form method="post" action="/create-user">
      <input name="name" placeholder="enter your name">
      <input type="submit" value="Submit">
      </form>-->
    </body>
    </html>`
  );
});

app.all('*',(req,res)=>{
  res.status(404).send('<h1>404 Page not found</h1>')
})

const PORT = 3000;
const HOST_NAME = "localhost";

app.listen(PORT, HOST_NAME, () => {
  console.log(`server running on ${HOST_NAME}:${PORT}`);
});
