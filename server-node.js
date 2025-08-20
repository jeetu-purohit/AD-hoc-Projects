const http = require("http");

const hostName = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("order");
  } else if (req.url === "/dosa") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("thanks for ordering dosa");
  }
});

server.listen(port, hostName, () => {
  console.log(`server is listing at http://${hostName}:${port}`);
});
