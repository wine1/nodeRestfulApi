const Router = require('koa-router')
const router = new Router()
const { apiPrefix } = require('../config/index')
const shopping = require('./shopping')
const cart = require('./cart')
router.prefix(apiPrefix)
router.use('/shopping', shopping.routes(), shopping.allowedMethods())
router.use('/cart', cart.routes(), cart.allowedMethods())
module.exports = router
