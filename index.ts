const Koa = require('koa')
const app = new Koa()
const mount = require('koa-mount')
const router = require('./src/routers/index')
const koaBody = require('koa-body')
const json = require('koa-json')
const logger = require('koa-logger')
const koajwt = require('koa-jwt')
// const cors = require('koa2-cors');
// app.use(cors())
app.use(logger())
app.use(json())
app.use(koaBody())

app.use(async (ctx: any, next: any) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With ');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});

// 错误处理
app.use((ctx: any, next: any) => {
  return next().catch((err: any) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  })
})
app.use(koajwt({
  secret: 'Gopal_token'
}).unless({ // 配置白名单
  path: [/registry/, /login/, /getCategoryList/]
}))


app.use(router.routes()).use(router.allowedMethods())
// router.allowedMethods()中间件，主要用于 405 Method Not Allowed 这个状态码相关
// 如果不加这个中间件，如果接口是get请求，而前端使用post请求，会返回 404 状态码，接口未定义。如果加了这个中间件，这种情况时，会返回405 Method Not Allowed ，提示 request method 不匹配，并在响应头返回接口支持的请求方法，更有利于调试

app.listen(8088)
