import ExtendableError from './extendableError.js';
import httpErrors from '../../constants/errors.js';

export default class InputParamError extends ExtendableError {
  constructor(info, code = httpErrors.INPUT_PARAM_ERROR) {
    super({ code, info });
  }
}
