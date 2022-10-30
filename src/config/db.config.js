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
    acquireConnectionTimeout: 5000,
    pool: {
        min: 0,
        max: 10,
        createTimeoutMillis: 8000,
        acquireTimeoutMillis: 8000,
        idleTimeoutMillis: 8000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
    }
  };
