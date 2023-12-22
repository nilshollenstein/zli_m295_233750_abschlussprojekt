/* eslint-disable import/no-extraneous-dependencies */
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:3000',
};

const outputFile = './swagger.json';
const routes = ['./src/tasks', './src/authentication'];
swaggerAutogen(outputFile, routes, doc);
