const { DataTypes } = require("sequelize");
const db = require("../../database/sequelize");
const sequelize = db.sequelize;
const model = require("../../models/shopping/food")(sequelize, DataTypes);
class FoodController {
    static async createFood(ctx) {
        await model.create({ name: "小花店", id: 1, restaurant_id: 1 });
        ctx.body = {
            code: 1,
            data: {},
            message: "初始化数据库成功",
        };
    }
}
module.exports = FoodController;
