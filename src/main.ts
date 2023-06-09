import "./shared/infrastructure/load-env";

import bodyParser from "body-parser";
import express from "express";

import { config } from "./shared/infrastructure/config";

const server = () => {
  const { port } = config.server;
  const app = express();

  app.use(bodyParser.json());
  app.listen(port, () => {
    console.log(`[APP] - Starting application on port ${port}`);
  });
};

server();
