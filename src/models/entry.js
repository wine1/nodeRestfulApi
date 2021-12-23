module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "entry",
        {
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            is_in_serving: {
                type: DataTypes.BOOLEAN,
            },
            description: {
                type: DataTypes.STRING.BINARY,
            },
            title: {
                type: DataTypes.STRING,
            },
            link: {
                type: DataTypes.TEXT,
            },
            image_url: {
                type: DataTypes.STRING,
            },
            icon_url: {
                type: DataTypes.STRING,
            },
            title_color: {
                type: DataTypes.STRING,
            },
        },
        {
            tableName: "entry",
        },
        // (async () => {
        //     await sequelize.sync({ force: false }); // force:true => delete it if exists
        // })(),
    );
};
