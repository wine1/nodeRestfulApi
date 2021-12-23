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

### 目标

登陆注册 ：1.普通用户 2.管理员
商店：增删改查商店 增删改查商品
购物车：不同商店的商品集合

todo
登陆鉴权
node 配合 ts
https://segmentfault.com/a/1190000039076931

### Sequelize

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

### mysql 基操

打开终端，命令行输入：mysql -u root -p，总是返回：zsh:command not found: mysql
运行 alias mysql=/usr/local/mysql/bin/mysql 即可
注意：这种方式只能临时有效，下次登入还是会出现：zsh:command not found: mysql

Show databases;

mysql -u root -p
createdatabase name;
use name;
source 『将.sql 文件直接拖拽至终端，自动补全其文件目录』
• 导出
打开『终端』输入：
cd 『打开要将.sql 文件生成的文件位置』
mysqldump -u root -p database_name>sql_name.sql

数据表简单操作
（1）显示某个数据库中的所有表：show tables;
（2）显示数据表的结构：desc 表名;
（3）创建数据表：create tabel 表名(字段名称 字段类型, ……);
（4）添加新列：alter table 列名 add 字段名称 字段类型;
（5）删除数据表：drop table 表名;
（6）复制表：create table 新表名 like 被复制表名;

### API

##### 用户

用户登陆（管理员）
url:`/api/user/login`
method:`post`

用户注册（管理员）
url:`/api/user/registry`
method:`post`

##### 商店

获取商店列表

获取特定商店信息

##### 商品

获取商品分类
url:`/api/shopping/getCategoryList`
method:`get`

增加商品分类
url:`/api/shopping/addCategoryList`
method:`get`

增加商品
url:`/api/shopping/addFood`
method:`get`

#### 购物车

获取购物车商品

删除购物车商品（单个 / 批量）

获取参数
get 操作 ctx.request.query
post 操作 ctx.request.body koa-body

#### 跨域方案

1. koa2-cors

```
npm install koa2-cors --save
const cors = require('koa2-cors');
app.use(cors())
```

2. 自己写一个中间件

```
app.use(async (ctx: any, next: any) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});
```
