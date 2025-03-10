import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TFG API',
      version: '1.0.0',
      description: 'API documentation for TFG project',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'User ID',
            },
            username: {
              type: 'string',
              description: 'Username of the user',
            },
            password: {
              type: 'string',
              description: 'Password of the user',
            },
            email: {
              type: 'string',
              description: 'Email of the user',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js', './src/models/*.js'], // Archivos donde se documentarán las rutas y modelos
};

const specs = swaggerJsdoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
