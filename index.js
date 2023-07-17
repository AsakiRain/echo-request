const http = require("http");

const app = require("./src/app");
const server = http.createServer(app);

const host = process.env.HOST;
const port = process.env.PORT;
if(!host || !port) {
  throw new Error("Host and port not set.");
}

server.listen(port, host);
server.on("listening", () => {
  console.log(`Server listening on http://${host}:${port}/`);
});
