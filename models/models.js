const { connection } = require("mongoose");
// const conn = require("../../services/db.js")

// import { DataTypes, Sequelize } from "sequelize";
const { DataTypes, Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }

)

sequelize.authenticate()
    .then(() => {
        console.log('Connected')
    })
    .catch(() => {
        console.log('Error' + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.test = require('./testModel.js')(sequelize, DataTypes)
// db.currencypair = require('./currencypairModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Yes re-sync done!')
    })

module.exports = db