/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const session = require('express-session');
const endpoints = require('./endpoints');
const authentication = require('./authentication');

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
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
