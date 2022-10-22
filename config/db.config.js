module.exports = {
    // HOST: "localhost",
    // USER: "postgres",
    // PASSWORD: "root",
    // DB: "bloomier-db",
    // dialect: "postgres",
    HOST: process.env.HOST,
    USER:process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.DIALECT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };