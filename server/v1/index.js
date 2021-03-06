import express from 'express';
import cors from 'cors';
import compression from 'compression';
import addRequestId from 'express-request-id';
import httpLogger from '../utils/httpsLogger.js';
import { itemsRouter } from './items/index.js';
import { stockRouter } from './stock/index.js';
import { companiesRouter } from './companies/index.js';
import { categoriesRouter } from './categories/index.js';

const expressLoader = ({ app }) => {
  app.use(addRequestId());
  app.use(httpLogger);
  app.use((req, res, next) => {
    // To prevent CORS Errors
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Useful if you're behind a reverse proxy
  // (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // The magic package that prevents frontend developers going nuts
  // Alternate description:
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());
  app.use(compression());

  // Transforms the raw string of req.s into json
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(itemsRouter);
  app.use(stockRouter);
  app.use(companiesRouter);
  app.use(categoriesRouter);

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  /// error handlers
  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res
        .status(err.status)
        .send({ message: err.message })
        .end();
    }
    return next(err);
  });

  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message
      }
    });
  });
};

export default expressLoader;
