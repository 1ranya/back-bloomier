module.exports = {
    // HOST: "localhost",
    // USER: "postgres",
    // PASSWORD: "root",
    // DB: "bloomier-db",
    // dialect: "postgres",
    // HOST: process.env.HOST,
    // PORT: process.env.PORT,
    // USER:process.env.USER,
    // PASSWORD: process.env.PASSWORD,
    // DB: process.env.DB,
    // DB_URL: process.env.DB_URL,
    define: {
      "createdAt": "createdat",
      "updatedAt": "updatedat"
    },
    HOST: "dpg-cd9resarrk09hiokut1g-a",
    USER: "admin",
    PASSWORD: "eho1Sq9drePuYae5QZBdzKat1FZs3FKr",
    DB: "bloomier_db",
    dialect: 'postgres',
    DB_URL: "postgres://admin:eho1Sq9drePuYae5QZBdzKat1FZs3FKr@dpg-cd9resarrk09hiokut1g-a.frankfurt-postgres.render.com/bloomier_db",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };