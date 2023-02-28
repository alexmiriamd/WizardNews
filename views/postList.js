const html = require("html-template-tag")

const postList = (list) => {
  const htmlPostList = html`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <div class="news-list">
        <header><img src="/logo.png"/>Wizard News</header>
        ${list.map((post) => html`
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
          )}
      </div>
    </body>
    </html>
    `;
  return htmlPostList;
};

module.exports = postList;
