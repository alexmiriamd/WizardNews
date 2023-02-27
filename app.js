const express = require("express");
const morgan = require("morgan");
const app = express();
const posts = require("./postBank")
const list = posts.list

app.use(morgan('dev')); //after installing morgan, logs req and res info

app.get("/", (req, res) => {list})
console.log(list)

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
