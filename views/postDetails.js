const html = require("html-template-tag");

const postDetails = (post) => {
  const htmlPostDetails = html`<!DOCTYPE html>
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
    </html>`;

  if (!post.id) {
    //if id doesn't exist; throw error
    res.status(404);
    const htmlError = html`<!DOCTYPE html>
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
    </html>`;
    return htmlError;
  } else {
    return htmlPostDetails;
  }
};

module.exports = postDetails;
