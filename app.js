const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Index</title></head>");
    res.write("<body><form action='/message' method='POST'><input type='text'><button type='submit'>send</button></form></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    //リクエストがデータを受信するたびに実行されるコールバック関数を登録しています
    //それをbodyという配列に追加
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    //リクエストのデータ受信が終了したとき
    return req.on("end", () => {
      //Buffer.concat()を使用してbodyに蓄積されたデータをまとめ
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.writeHead("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>not index</title></head>");
  res.write("<body><h1>Hiiiiiii</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
