import ExtendableError from './extendableError.js';
import httpErrors from '../../constants/errors.js';

export default class NotFoundError extends ExtendableError {
  constructor(code = httpErrors.NOT_FOUND, info) {
    super({ code, info });
  }
}
