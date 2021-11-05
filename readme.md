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
Sequelize 基本操作
model.bulkCreate(）// 批量插入数据
// 你可以使用 freezeTableName: true 参数停止 Sequelize 执行自动复数化. 这样,Sequelize 将推断表名称等于模型名称,而无需进行任何修改
// {
// freezeTableName: true
// }
// 你也可以直接直接告诉 Sequelize 表名称
{
tableName: "activity",
},
// UserModel.sync()方法，不带参数表示如果表不存在，才创建表。带{ force: true }参数则表示，原表存在需要删除原表。带{ force: false }参数则表示更新表的字段内容以匹配当前表。
(async () => {
await sequelize.sync({ force: false }); // force:true => delete it if exists
})(),

database/index.js 中是普通的连接数据库方法
Sequelize.js 用的 Sequelize 操作数据库

（1）get 请求：使用 ctx.request.query
（2）post 请求：使用 ctx.request.body

// 店铺 购物车 模块
// 登陆注册
// 管理员注册
