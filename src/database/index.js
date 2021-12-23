const mysql = require("mysql");
const pool = mysql.createPool({
    host: "127.0.0.1", // 数据库地址
    user: "root", // 数据库用户
    password: "12345678", // 数据库密码
    database: "nodesql", // 选中数据库
});
// 在数据池中进行会话操作

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
};
module.exports = { query };
