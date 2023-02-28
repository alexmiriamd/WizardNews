const express = require("express");
const morgan = require("morgan");
const app = express();
const posts = require("./postBank");
const list = posts.list();

const postList = require("./views/postList");
const postDetails = require("./views/postDetails");

app.use(morgan("dev"));   //after installing morgan, logs req and res info

app.use(express.static("public"));    //gives us access to our static files in public folder

app.get("/", (req, res) => {    //get all posts
  res.send(postList(list));
});

app.get("/posts/:id", (req, res) => {   //get single posts
  const id = req.params.id;
  const post = posts.find(id);

  res.send(postDetails(post));
});

const {PORT = 1337} = process.env;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
