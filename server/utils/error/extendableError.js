/* eslint-disable max-len */
import httpErrors from '../../constants/errors.js';

export default class ExtendableError extends Error {
  get HttpError() {
    return this.code;
  }

  /**
   * Creates a custom error class that can be extendable
   * @param {{code: string, info: string}} status - HTTP status message and code
   * @param {{isPublic: boolean}} flags - Control flags like  isPublic, isOperational
   */
  constructor({ code = httpErrors.INTERNAL_SERVER_ERROR, info } = {}) {
    super(info);
    if (info) this.info = info;
    this.code = code;
    this.name = code.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
