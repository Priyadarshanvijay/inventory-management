import ExtendableError from './extendableError.js';
import httpErrors from '../../constants/errors.js';

export default class ValidationError extends ExtendableError {
  constructor(info = '', code = httpErrors.VALIDATION_ERROR) {
    super({ code, info });
  }
}
