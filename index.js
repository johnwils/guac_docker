const GuacamoleLite = require("guacamole-lite");

const guacdOptions = {
  host: process.env.GUACD_HOST,
  port: process.env.GUACD_PORT,
};

const clientOptions = {
  crypt: {
    cypher: "AES-256-CBC",
    key: "MySuperSecretKeyForParamsToken12",
  },
};

new GuacamoleLite(websocketOptions, guacdOptions, clientOptions);
