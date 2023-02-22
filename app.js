const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { routes } = require('./routes');
const { globalErrorHandler } = require('./utils/error');

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(morgan('dev'));

  app.use(routes);
  app.use(globalErrorHandler);

  // health check
  app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong' });
  });

  return app;
};

module.exports = { createApp };
