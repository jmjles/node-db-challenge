// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: __dirname + "/data/data.db3"
    },
    migrations: {
      directory: __dirname + "/data/migrations"
    },
    seeds: {
      directory: __dirname + "/data/seeds"
    },
    useNullAsDefault: true
  }
};
