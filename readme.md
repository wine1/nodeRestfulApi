## 项目结构

nodeElm
├── config // 项目配置文件
├── controllers // 控制层，默认是一个 koa 的中间件，主要的作用是精细化路由的中间件
├── database // 数据库操作
├── middleware //中间层
├── models // 数据库模型，主要是用来配置数据的字段和数据字段的验证等
├── node_modules  
├── routers // 路由
├── util // 工具类
├── README.md // 说明文档
├── package.json
├── index.js // 入口文件
└── yarn.lock

Sequelize：我们选择 Node 的 ORM 框架 Sequelize 来操作数据库。这样，我们读写的都是 JavaScript 对象，Sequelize 帮我们把对象变成数据库中的行。
