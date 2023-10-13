import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "config";

import Logger from "./clients/logger";
import { postMiddlewares, preMiddlewares } from "./middlewares";
import api from "./api/router";

async function main() {
  const app = express();

  app.use(cors({ credentials: true, origin: config.get("deploy.frontendUrl") }));

  app.use(express.json());
  app.use(cookieParser());

  app.use(preMiddlewares());

  app.use("/api", api);

  app.use(postMiddlewares());

  app.listen(config.get("deploy.expressPort"));
  Logger.instance.info("\\|/ VTB Geoguesser API is ready \\|/");
}

main();
