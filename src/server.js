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

app.use(express.json());

app.use(
  session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {},
  }),
);

app.use(
  '/',
  authentication,

);
app.use(
  '/tasks',
  endpoints,
);

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
