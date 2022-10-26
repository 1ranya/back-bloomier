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
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.DIALECT,
    DB_URL: process.env.DB_URL,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };