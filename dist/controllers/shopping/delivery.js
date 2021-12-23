"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require("sequelize");
const db = require("../../database/sequelize");
const sequelize = db.sequelize;
const model = require("../../models/shopping/delivery")(sequelize, DataTypes);
class DeliveryController {
    static async getDeliveryList(ctx) {
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
module.exports = DeliveryController;
