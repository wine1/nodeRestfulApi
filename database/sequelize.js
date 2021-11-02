const { Sequelize } = require("sequelize");
const config = {
    database: "nodesql",
    username: "root",
    password: "12345678",
    host: "127.0.0.1",
    port: 3306,
};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect:
            "mysql" /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
        pool: {
            max: 5,
            min: 0,
            idle: 30000,
        },
        define: {
            timestamps: false,
        },
    },
);

module.exports = {
    sequelize,
};
