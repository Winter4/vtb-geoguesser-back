import {Router} from "express";
import config from "config";
import swaggerUi from "swagger-ui-express";

import docs from "./v1.swagger";

import spots from "./spots/spots.router";
import inclusions from "./inclusions/inclusions.router";
import services from "./services/services.router";
import queue from "./queue/queue.router";
import offices from "./offices/offices.router";

const v1 = Router();

if (config.get("deploy.nodeEnv") === "development") {
  v1.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));
}

v1.use("/spots", spots);
v1.use("/inclusions", inclusions);
v1.use("/services", services);
v1.use("/queue", queue);
v1.use("/offices", offices);

export default v1;
