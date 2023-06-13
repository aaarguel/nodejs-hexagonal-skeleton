import "./shared/infrastructure/load.env";

import bodyParser from "body-parser";
import express from "express";

import { userRouter } from "./modules/user/infrastructure/api/user.routes";
import { config } from "./shared/infrastructure/config.server";

const server = () => {
  const { port } = config.server;
  const app = express();

  app.use(bodyParser.json());
  app.use("/user", userRouter);
  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
};

server();
