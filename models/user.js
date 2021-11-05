module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            username: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
            address: {
                type: DataTypes.STRING,
            },
            avatar: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: "user",
        },
        // (async () => {
        //     await sequelize.sync({ force: false }); // force:true => delete it if exists
        // })(),
    );
};
