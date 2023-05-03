# Expres

> 官网地址：[https://expressjs.com](https://expressjs.com)

- 快速启动一个服务

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
```
# koa

> 官网地址：[https://koa.bootcss.com](https://koa.bootcss.com)

- 快速启动一个服务
```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
```
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
- [ ] Learn about API automation and testing by example