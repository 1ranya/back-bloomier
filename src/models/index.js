const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, dbConfig.DB_URL, dbConfig.define,
    {
        host: dbConfig.HOST,
        dialect: 'postgres',
        define: dbConfig.define,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },   
    }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.photos = require('./photo.model.js')(sequelize, Sequelize);
module.exports = db;
