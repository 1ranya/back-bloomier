const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: "postgres",
        "define": {
            timestamps: false
        }  
    }
)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.photos = require('./photo.model.js')(sequelize, Sequelize);
module.exports = db;
