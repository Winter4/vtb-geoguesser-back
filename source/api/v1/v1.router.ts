import { Router } from "express";

import spots from "./spots/spots.router";
import inclusions from "./inclusions/inclusions.router";
import services from "./services/services.router";

const v1 = Router();

v1.use("/spots", spots);
v1.use("/inclusions", inclusions);
v1.use("/services", services);

export default v1;
