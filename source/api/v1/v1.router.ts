import {Router} from "express";

import spots from "./spots/spots.router";
import inclusions from "./inclusions/inclusions.router";
import services from "./services/services.router";
import queue from "./queue/queue.router";
import offices from "./offices/offices.router";

const v1 = Router();

v1.use("/spots", spots);
v1.use("/inclusions", inclusions);
v1.use("/services", services);
v1.use("/queue", queue);
v1.use("/offices", offices);

export default v1;
