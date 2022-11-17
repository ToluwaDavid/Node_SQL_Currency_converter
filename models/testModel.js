module.exports = (Sequelize, DataTypes) => {
    const Tests = Sequelize.define('test', {
        firstname: {
            type: DataTypes.STRING
        },
        lastname: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })

    return Tests
}