const http = require("http");

const users = ["User 1", "User 2"];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url, method);
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Hello from node js server</title></head>");
    res.write("<body>");
    res.write("<h1>Hello From my Node.js server</h1>");
    res.write(`<form method="post" action="/create-user">`);
    res.write(`<input name="name" placeholder="enter your name">`);
    res.write(`<input type="submit" value="Submit">`);
    res.write(`</form>`);
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head><title>Users</title></head>
      <body>
        <h1>Users</h1>
        <ul>`);
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      res.write(`<li>${user}</li>`);
    }
    res.write(`
        </ul>
      </body>
    </html>
    `);
    res.write("");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (url === "/create-user" && method === "POST") {
    console.log("works");
    const body = [];
    req.on("data", (chunck) => {
      console.log(chunck);
      body.push(chunck);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString().split("=");
      let user;
      if (parsedBody[0] == "name") {
        [, user] = parsedBody;
      } else {
        res.statusCode = 302;
        res.setHeader("Location", "/error");
        return res.end();
      }
      console.log(JSON.stringify(parsedBody));
      console.log(parsedBody);
      users.push(user);
      console.log(users);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/users");
    return res.end();
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html>
      <head><title>404 Page</title></head>
      <body>
        <h1>404 Page</h1>
      </body>
    </html>
    `);
    res.end();
  }
});
const PORT = 3000;

server.listen(PORT, () =>
  console.log(`server running on http://localhost:3000`)
);
