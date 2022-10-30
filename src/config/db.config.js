module.exports = {
    LOCAL_HOST: process.env.LOCAL_HOST,
    LOCAL_USER: process.env.LOCAL_USER,
    LOCAL_PASSWORD: process.env.LOCAL_PASSWORD,
    LOCAL_DB: process.env.LOCAL_DB,

    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.DIALECT,
    DB_URL: process.env.DB_URL,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000000000
    }
  };
