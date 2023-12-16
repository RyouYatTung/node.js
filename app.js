const http = require("http");
//routes.jsの読み込み
const routes = require("./routes");

const server = http.createServer(routes.handler);

server.listen(3000);
