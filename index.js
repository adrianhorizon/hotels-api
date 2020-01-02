const express = require('express');
const app = express();
const { config } = require('./config/index');
const hotelsApi = require('./routes/hotels.js');
const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers.js');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json());

hotelsApi(app);

app.use(notFoundHandler);
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => console.log(`Listening ${config.port}`));

