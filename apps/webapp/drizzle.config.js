export default {
    schema: "../../packages/db/schema.js",
    dialect: "sqlite",
    driver: "d1-http",
    dbCredentials: {
      wranglerConfigPath: "./wrangler.toml",
      dbName: "",
    },
    out: "migrations",
  };


  