const { DataTypes } = require("sequelize");
const db = require("../database/sequelize");
const sequelize = db.sequelize;
const CategoryModel = require("../models/shopping/category")(
    sequelize,
    DataTypes,
);
const ActivityModel = require("../models/shopping/activity")(
    sequelize,
    DataTypes,
);
const DeliveryModel = require("../models/shopping/delivery")(
    sequelize,
    DataTypes,
);
const EntryModel = require("../models/entry")(sequelize, DataTypes);

const entryListData = require("../InitData/entry");
const categoryListData = require("../InitData/category");
const activityListData = require("../InitData/activity");
const deliveryListData = require("../InitData/delivery");

class initController {
    static async initData(ctx) {
        await CategoryModel.destroy({
            where: {},
            truncate: true,
        });
        await ActivityModel.destroy({
            where: {},
            truncate: true,
        });

        await DeliveryModel.destroy({
            where: {},
            truncate: true,
        });

        await EntryModel.destroy({
            where: {},
            truncate: true,
        });

        //bulkCreate 批量处理数据
        await CategoryModel.bulkCreate(categoryListData);
        await ActivityModel.bulkCreate(activityListData);
        await DeliveryModel.bulkCreate(deliveryListData);
        await EntryModel.bulkCreate(entryListData);
        ctx.body = {
            code: 1,
            data: {},
            message: "初始化数据库成功",
        };
    }
}
module.exports = initController;
