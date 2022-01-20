import winston from 'winston';
import path from 'path';

const {
  createLogger, config, transports, format
} = winston;

const options = {
  file: {
    level: 'info',
    filename: path.resolve('logs', 'errors.log'),
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

const logger = createLogger({
  format: format.combine(
    format.errors({ stack: true }),
    format.simple(),
    format.timestamp()
  ),
  levels: config.npm.levels,
  transports: [
    new transports.File(options.file),
    new transports.Console(options.console)
  ],
  exitOnError: false
});

export default logger;
