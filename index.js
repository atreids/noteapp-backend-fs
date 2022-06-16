const app = require("./app"); // Actual express application
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

logger.info("starting server...");
const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`
  -----------------------------
   Server started on port ${config.PORT}
  -----------------------------
  `);
});
