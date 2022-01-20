import dotenv from 'dotenv';
import express from 'express';
import expressLoader from './v1/index.js';

const startServer = async () => {
  dotenv.config();
  const app = express();
  // Use the port specified in Environment variable,
  // if not present, fallback to port 3002
  const port = process.env.PORT || 3002;
  expressLoader({ app });
  app.listen(port, () => console.log(`Server started at port ${port}`))
    .on('error', () => {
      process.exit(1);
    });
};

// This would serve as the starting point of our backend.
startServer();
