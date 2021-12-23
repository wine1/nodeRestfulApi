const { DataTypes } = require("sequelize");
const db = require("../../database/sequelize");
const sequelize = db.sequelize;
const model = require("../../models/shopping/food")(sequelize, DataTypes);

interface InterFood {
    id: number,
    name: string,
    restaurant_id: number,
    foods: object
}

class FoodController {
    /** 增加食物 */
    static async createFood(ctx: any) {
        let data: InterFood = ctx.request.query
        await model.create({ ...data });
        ctx.body = {
            code: 1,
            data: {},
            message: "添加食物成功",
        };
    }

    /** 删除食物 */
    static async deleteFood(ctx: any) {
        let data: InterFood = ctx.request.query
        console.log(data)

    }
}
module.exports = FoodController;
export { }