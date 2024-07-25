const express = require("express");
const http = require("http");
const GuacamoleLite = require("guacamole-lite");

const HTTP_PORT = 8080;

const app = express();
const server = http.createServer(app);

const guacdOptions = {
  host: process.env.GUACD_HOST || "guacd",
  port: parseInt(process.env.GUACD_PORT, 10) || 4822,
};

console.log(guacdOptions);

const clientOptions = {
  crypt: {
    cypher: "AES-256-CBC",
    key: "MySuperSecretKeyForParamsToken12",
  },
};

const guacServer = new GuacamoleLite({ server }, guacdOptions, clientOptions);

server.listen(HTTP_PORT, () => {
  console.log(`HTTP server running on port ${HTTP_PORT}`);
});

guacServer.on("open", (connection) => {
  console.log("Guacamole client connected");
});

guacServer.on("close", (connection) => {
  console.log("Guacamole client disconnected");
});

guacServer.on("error", (clientConnection, error) => {
  console.error(clientConnection, error);
});
