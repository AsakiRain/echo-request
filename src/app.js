const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.set("json spaces", 4); //程序输出 JSON 的格式会变得更易读：
app.use(cookieParser()); //使用cookie解析器
app.use(bodyParser.json()); //使用json负载解析
app.use(
  bodyParser.urlencoded({
    //支持foo[bar]解析为对象
    extended: true,
  })
);

//设置跨域
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, DELETE, PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, If-Modified-Since, Authorization"
  );
  next();
});

app.use((req, res, next) => {
  const resp = {
    connect: {
      local_ip: req.socket.remoteAddress,
      local_port: req.socket.remotePort,
      remote_ip: req.socket.localAddress,
      remote_port: req.socket.localPort,
    },
    method: req.method,
    url: req.url,
    query: req.query,
    headers: req.headers,
    cookie: req.cookies,
    body: req.body,
  };
  console.log(resp);
  res.json(resp);
});

module.exports = app;
