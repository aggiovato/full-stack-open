// IMPORT MODULES
const app = require("./app");
const config = require("./utils/config");
const logger = require("./utils/logger");

// START THE SERVER
app.listen(config.PORT, () => {
  logger.info(`Server running at http://localhost:${config.PORT}`);
});
