const { DataTypes } = require("sequelize");
const db = require("../database/sequelize");
const sequelize = db.sequelize;
const model = require("../models/entry")(sequelize, DataTypes);
const entryListData = require("../InitData/entry");

class EntryController {
    static async EntryData(ctx) {
        // await ActivityModel.destroy({
        //     where: {},
        //     truncate: true,
        // });
        ctx.body = "succ";
    }
}
module.exports = EntryController;
