const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LearningPackage Rest API',
      version: '1.0.0',
      description: 'A simple Express API with Swagger documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./index.js'], // Path to your API routes
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
console.log("swagger do from annotated js: ", swaggerDocs);

module.exports = {
  swaggerDocs,
  swaggerUi,
};
