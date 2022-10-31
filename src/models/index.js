const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,
//     {
//         host: dbConfig.HOST,
//         dialect: "postgres",
//         "define": {
//             timestamps: false
//         },
//         port: 5432,
//         idleTimeoutMillis: 0,
//         connectionTimeoutMillis: 0,
//     }
// )

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'dpg-cd9resarrk09hiokut1g-a',
  username: 'admin',
  password: 'eho1Sq9drePuYae5QZBdzKat1FZs3FKr',
  database: 'bloomier_db',
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.photos = require('./photo.model.js')(sequelize, Sequelize);
module.exports = db;
