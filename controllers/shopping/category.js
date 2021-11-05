const { DataTypes } = require("sequelize");
const db = require("../../database/sequelize");
const sequelize = db.sequelize;
const model = require("../../models/shopping/category")(sequelize, DataTypes);

class CategoryController {
    /** 获取分类数据 */
    static async getCategoryList(ctx) {
        // const data = ctx.request.query
        if (model) {
            // if (data) {
            const list = await model.findAll();
            console.log("list", list);
            ctx.body = {
                code: 1,
                data: {
                    list,
                },
                message: "成功",
            };
            // } else {
            //   ctx.body = {
            //     code: -1,
            //     message: '参数错误',
            //   }
            // }
        }
    }

    /** 插入category数据 */
    static async updateCategoryList(ctx) {
        const data = ctx.request.query;
        console.log(data);
        if (model) {
            if (data) {
                const list = await model.create(data);
                console.log("list", list);
                ctx.body = {
                    code: 1,
                    data: {
                        list,
                    },
                    message: "成功",
                };
            } else {
                ctx.body = {
                    code: -1,
                    message: "参数错误",
                };
            }
        }
    }
    /** 选择查询 */
    static async selectCategoryList(ctx) {
        const data = ctx.request.query;
        console.log(data);
        if (model) {
            if (data) {
                const list = await model.create(data);
                console.log("list", list);
                ctx.body = {
                    code: 1,
                    data: {
                        list,
                    },
                    message: "成功",
                };
            } else {
                ctx.body = {
                    code: -1,
                    message: "参数错误",
                };
            }
        }
    }

    /** 删除条目 */
    static async destroyCategoryList(ctx) {
        await model.destroy();
        return true;
    }
}
module.exports = CategoryController;
