const { getData } = require('../../database/createSql')

class Category {
  first = ctx => {
    ctx.body = 'hahahahah'
  }
  db = async ctx => {
    ctx.body = await getData()
  }
}
const category = new Category()
module.exports = category
