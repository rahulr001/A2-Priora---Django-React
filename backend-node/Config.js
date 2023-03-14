module.exports = {
    development: {
      dialect: "postgres",
      username: "postgres",
      password:"admin",
      database: "a2priora",
      host: "localhost",
      port: 5432,
      logging: false,
    },
    test: {
      dialect: "postgres",
      username: "postgres",
      password: "admin",
      database: "a2priora",
      host: "localhost",
      port: 5432,
      logging: false,
    },
    production: {
      dialect: "postgres",
      use_env_variable: "DATABASE_URL",
      logging: false,
    },
  };
  