const Router = require('koa-router')
const router = new Router()
const category = require('../controllers/shopping/category')

router.get('/getCategoryList', category.getCategoryList)
// router.get('/first', category.first)
// router.get('/db', category.db)
// router.get('/:id', async ctx => {
//   ctx.body = `hello ${ctx.params.id}`
// })
// router.post('/', async ctx => {
//   ctx.body = ctx.request.body
// })

module.exports = router
