const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! 我的第一个 Node.js 接口跑起来了');
});

app.get('/users', (req, res) => {
  res.send('Hello Wangzijian! 我的第一个 Node.js 接口跑起来了');
});

app.listen(PORT, () => {
  console.log(`服务已启动，访问 http://localhost:${PORT}`);
});