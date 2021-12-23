const { DataTypes } = require("sequelize");
const db = require("../database/sequelize");
const sequelize = db.sequelize;
const model = require("../models/user")(sequelize, DataTypes);
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

interface InterUserInfo {
    username: string,
    password: string,
    isAdmin?: boolean,
    address?: string,
    avatar?: string
}

class UserController {
    constructor() {

    }
    /** 注册 */
    static registry = async (ctx: any) => {
        let userInfo: InterUserInfo = ctx.request.body;
        let { username, password } = userInfo || {};
        try {
            let message = "";
            let code = 0;

            let usernameRes = await model.findOne({ where: { username } });

            if (usernameRes) {
                message = "用户已存在";
            } else {
                password = crypto.createHash('md5').update(password).digest('hex')
                // console.log('userinfo', userInfo)
                await model.create({ ...userInfo, password });
                message = '用户注册成功'
                code = 1
            }
            ctx.body = {
                code,
                data: {},
                message,
            };
        } catch (err) {
            console.log('err', err)
        }
    };

    /** 登陆 */
    static login = async (ctx: any) => {
        let userInfo: InterUserInfo = ctx.request.body;
        let { username, password } = userInfo || {};
        try {
            let message = "";
            let code = 0;
            let data = {}
            let usernameRes = await model.findOne({ where: { username } });
            if (usernameRes) {
                const { username: SqlName, password: SqlPassword } = usernameRes?.dataValues || {}
                const user = [{ SqlName, SqlPassword }]
                const result = user.find((item: any) => item.SqlName === username && item.SqlPassword === crypto.createHash('md5').update(password).digest('hex'))
                if (result) {
                    const token = jwt.sign(
                        { name: result.SqlName },
                        "Gopal_token", // secret
                        { expiresIn: 60 * 60 } // 60 * 60 s
                    );
                    let { password, ...info } = usernameRes?.dataValues || {}
                    ctx.set('Authorization', token);
                    // ctx.set('Cookie', token);
                    // ctx.cookies.set(token)
                    data = {
                        ...info, token
                    }
                }
                message = "登陆成功";
                code = 1
            } else {
                code = -1
                message = "用户名或密码错误"
            }
            ctx.body = {
                code,
                data,
                message,
            };
        } catch (err) {
            console.log('err', err)
        }
    };

    /** 登出 */
    static loginOut = async () => {

    }
}

module.exports = UserController;

export { }