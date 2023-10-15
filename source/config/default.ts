export default {
  deploy: {
    expressPort: process.env.EXPRESS_PORT,
    frontendUrl: process.env.FRONTEND_URL,
    nodeEnv: process.env.NODE_ENV,
  },
  database: {
    logs: process.env.DB_LOGS,
  },
  redis: {
    url: process.env.REDIS_URL,
  },
};
