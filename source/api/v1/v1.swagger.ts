import config from "config";

import inclusions from "./inclusions/inclusions.swagger";
import services from "./services/services.swagger";
import offices from "./offices/offices.swagger";
import spots from "./spots/spots.swagger";
import queue from "./queue/queue.swagger";

export default {
  openapi: "3.0.0",
  info: {
    title: "VTB GeoGuesser API",
    version: "0.1.0",
    description: "Fast-Forwarded API for getting most suitable bank department",
  },
  servers: [
    {
      url: `http://localhost:${config.get("deploy.expressPort")}`,
      description: "Development server",
    },
    {
      url: `http://192.168.1.130:${config.get("deploy.expressPort")}`,
      description: "LAN backend PC",
    },
  ],
  paths: {...inclusions, ...services, ...offices, ...spots, ...queue},
};
