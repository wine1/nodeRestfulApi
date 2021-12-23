const { DataTypes } = require("sequelize");
const db = require("../../database/sequelize");
const sequelize = db.sequelize;
const model = require("../../models/shopping/activity")(sequelize, DataTypes);

class ActivityController {
    static async getActivityList(ctx: any) {
        if (model) {
            const list = await model.findAll();
            console.log("list", list);
            ctx.body = {
                code: 1,
                data: {
                    list,
                },
                message: "成功",
            };
        }
    }
}

module.exports = ActivityController;
export { }