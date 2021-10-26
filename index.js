const Koa = require('koa')
const app = new Koa()
const mount = require('koa-mount')
const router = require('./routers/index')
const koaBody = require('koa-body')
const json = require('koa-json')
const logger = require('koa-logger')

app.use(logger())
app.use(json())
app.use(router.routes()).use(router.allowedMethods())
// router.allowedMethods()中间件，主要用于 405 Method Not Allowed 这个状态码相关
// 如果不加这个中间件，如果接口是get请求，而前端使用post请求，会返回 404 状态码，接口未定义。如果加了这个中间件，这种情况时，会返回405 Method Not Allowed ，提示 request method 不匹配，并在响应头返回接口支持的请求方法，更有利于调试

app.listen(8088)
