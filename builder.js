const { builder } = require("buildes");
builder({
  input: "client/index.jsx",
  minimized: true,
  bundle: true,
  output: "client/dist/index.js",
});
