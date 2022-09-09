const http = require("http");
const path = require("path");
const app = require("./src/app");

const debug = require("debug")("sso-badending:server");
const server = http.createServer(app);

server.listen(3000);
server.on("listening", () => {
  console.log("Server listening on http://localhost:3000/");
});
