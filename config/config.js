require("dotenv").config();

const config = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "freshdev_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "freshdev_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};

module.exports = config;
