const express = require("express");
const morgan = require("morgan");
const app = express();
const posts = require("./postBank")
const list = posts.list();

app.use(morgan('dev')); //after installing morgan, logs req and res info

app.use(express.static('public'));


app.get("/", (req, res) => {      //all posts

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" href="/style.css" />
  </head>
  <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${list.map(post => `
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            <a href="/posts/${post.id}">${post.title}</a>
            <small>(by ${post.name})</small>
            
          </p>
          <small class="news-info">
            ${post.upvotes} upvotes | ${post.date}
          </small>
        </div>`
      ).join(' ')}
    </div>
  </body>
  </html>
  `
  res.send(html);
})


app.get('/posts/:id', (req, res) => {       // single posts
  const id = req.params.id;
  const post = posts.find(id);

  const html = 
  `<!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" href="/style.css" />
  </head>

  <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      
        <div class='news-item'>
          <p>
            <span class="news-position">${post.id}. ▲</span>
            ${post.title}
            <small>(by ${post.name})</small>
          </p>
          <p>
          ${post.content}
          </p>
        </div>
    </div>
  </body>
  </html>`

  if(!post.id){
    res.status(404)
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header><img src="/logo.png"/>Wizard News</header>
      <div class="not-found">
        <p>404: Page Not Found</p>
      </div>
    </body>
    </html>
    `
    res.send(html)
  } else{
  res.send(
    html
  )}
})

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});