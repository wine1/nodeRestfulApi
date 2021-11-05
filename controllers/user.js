const { DataTypes } = require("sequelize");
const db = require("../database/sequelize");
const sequelize = db.sequelize;
const model = require("../models/user")(sequelize, DataTypes);

class UserController {
    static getUser = async (ctx) => {
        let userInfo = ctx.request.body;
        await model.findAll({ attributes: userInfo });
        ctx.body = {
            code: 1,
            data: {},
            message: "用户登陆成功",
        };
    };

    /** 登陆注册 */
    static addUser = async (ctx) => {
        let userInfo = ctx.request.query;
        let { username, password } = userInfo;
        try {
            let usernameRes = await model.findOne({ where: { username } });
            let passwordRes = await model.findOne({ where: { password } });
        } catch (err) {
            ctx.body = {
                code: 1,
                data: {},
                message: "用户名或密码错误",
            };
        }
        if (usernameRes === null && passwordRes === null) {
            await model.create(userInfo);
            ctx.body = {
                code: 1,
                data: {},
                message: "用户注册成功",
            };
        } else {
            if (usernameRes === null || passwordRes === null) {
                ctx.body = {
                    code: 1,
                    data: {},
                    message: "用户名或密码错误",
                };
            }
        }
        console.log(
            "userInfo",
            usernameRes === null,
            passwordRes === null,
            userInfo,
        );
    };
}

module.exports = UserController;
