export default {
  deploy: {
    port: process.env.EXPRESS_PORT,
    expressPort: process.env.EXPRESS_PORT,
    frontendUrl: process.env.FRONTEND_URL,
  },
  database: {
    logs: process.env.DB_LOGS,
  },
  redis: {
    url: process.env.REDIS_URL,
  },
};
