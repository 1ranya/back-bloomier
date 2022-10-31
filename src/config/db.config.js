module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.DIALECT,
    DB_URL: process.env.DB_URL,
    
    acquireConnectionTimeout: 5000,
    pool: {
      max: 5,
      min: 0,
      acquire: 300000,
      idle: 300000
    }
  };
