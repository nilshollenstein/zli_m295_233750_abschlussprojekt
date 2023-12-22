/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const endpoints = require('./tasks');
const authentication = require('./authentication');
const swaggerDocument = require('../swagger.json');

const app = express();
const port = 3000;

// Middleware to read json
app.use(express.json());

// load session-express module for cookies
app.use(
  session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {},
  }),
);
// Import endpoints from other files
app.use(
  '/',
  authentication,

);
app.use(
  '/tasks',
  endpoints,
);

// load swagger-ui-express to display the swagger ui
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
