const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  const url = req.url;
  if (url === "/") {
    res.write(`
    <html>
      <head>
        <title>enter message</title>
      </head>
      <body>
        <h1>ddd</h1>
      </body>
    </html>
  `);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>ht¥eeee</title>
      </head>
      <body>
        <h1>ddd</h1>
      </body>
    </html>
  `);
  res.end();
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
