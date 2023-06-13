export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    dbName: process.env.DB_NAME || "",
    userName: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    host: process.env.DB_HOST || "",
    dialect: process.env.DB_DIALECT || "",
  },
};
