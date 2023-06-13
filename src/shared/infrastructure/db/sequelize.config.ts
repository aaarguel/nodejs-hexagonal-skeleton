import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";

import { config } from "../config.server";

export const sequelize = () => {
  console.log("[DB] Connecting to database...");

  const init = new Sequelize(
    config.database.dbName,
    config.database.userName,
    config.database.password,
    {
      host: config.database.host,
      dialect: "postgres",
    }
  );

  init
    .authenticate()
    .then(() => {
      console.log("[DB] Connection has been established successfully.");
    })
    .catch((err) => {
      throw err;
    });
  return init;
};
