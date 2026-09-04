const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const app = express();
const PORT = process.env.PORT || 3000;

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World! 我的第一个 Node.js 接口跑起来了');
});

app.get('/users', (req, res) => {
  res.send('Hello Wangzijian! 我的第一个 Node.js 接口跑起来了');
});

// 新增：从数据库真实查询所有用户
app.get('/db-users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 新增：插入一条测试用户数据
app.get('/db-users/seed', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Wangzijian',
        email: `test${Date.now()}@example.com`,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`服务已启动，访问 http://localhost:${PORT}`);
});