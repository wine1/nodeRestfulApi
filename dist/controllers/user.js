"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const { DataTypes } = require("sequelize");
const db = require("../database/sequelize");
const sequelize = db.sequelize;
const model = require("../models/user")(sequelize, DataTypes);
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
class UserController {
    constructor() {
    }
}
_a = UserController;
/** 注册 */
UserController.registry = async (ctx) => {
    let userInfo = ctx.request.body;
    let { username, password } = userInfo || {};
    try {
        let message = "";
        let code = 0;
        let usernameRes = await model.findOne({ where: { username } });
        if (usernameRes) {
            message = "用户已存在";
        }
        else {
            password = crypto.createHash('md5').update(password).digest('hex');
            // console.log('userinfo', userInfo)
            await model.create({ ...userInfo, password });
            message = '用户注册成功';
            code = 1;
        }
        ctx.body = {
            code,
            data: {},
            message,
        };
    }
    catch (err) {
        console.log('err', err);
    }
};
/** 登陆 */
UserController.login = async (ctx) => {
    let userInfo = ctx.request.body;
    let { username, password } = userInfo || {};
    try {
        let message = "";
        let code = 0;
        let data = {};
        let usernameRes = await model.findOne({ where: { username } });
        if (usernameRes) {
            const { username: SqlName, password: SqlPassword } = (usernameRes === null || usernameRes === void 0 ? void 0 : usernameRes.dataValues) || {};
            const user = [{ SqlName, SqlPassword }];
            const result = user.find((item) => item.SqlName === username && item.SqlPassword === crypto.createHash('md5').update(password).digest('hex'));
            if (result) {
                const token = jwt.sign({ name: result.SqlName }, "Gopal_token", // secret
                { expiresIn: 60 * 60 } // 60 * 60 s
                );
                let { password, ...info } = (usernameRes === null || usernameRes === void 0 ? void 0 : usernameRes.dataValues) || {};
                ctx.set('Authorization', token);
                // ctx.set('Cookie', token);
                // ctx.cookies.set(token)
                data = {
                    ...info, token
                };
            }
            message = "登陆成功";
            code = 1;
        }
        else {
            code = -1;
            message = "用户名或密码错误";
        }
        ctx.body = {
            code,
            data,
            message,
        };
    }
    catch (err) {
        console.log('err', err);
    }
};
/** 登出 */
UserController.loginOut = async () => {
};
module.exports = UserController;
