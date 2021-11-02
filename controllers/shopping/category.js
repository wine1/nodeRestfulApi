const { DataTypes } = require('sequelize')
const db = require('../../database/sequelize')
const sequelize = db.sequelize
const model = require('../../models/shopping/category')(sequelize, DataTypes)
console.log('model', model)
class CategoryController {
  /** 获取category */
  static async getCategoryList(ctx) {
    // const data = ctx.request.query
    if (model) {
      // if (data) {
      const list = await model.findAll()
      console.log('list', list)
      ctx.body = {
        code: 1,
        data: {
          list,
        },
        message: '成功',
      }
      // } else {
      //   ctx.body = {
      //     code: -1,
      //     message: '参数错误',
      //   }
      // }
    }
  }
}
module.exports = CategoryController
