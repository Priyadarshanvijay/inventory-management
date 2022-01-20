const getHttpError = (
  code = 500,
  name = 'INTERNAL_SERVER_ERROR'
) => new class extends Number {
  get String() { return this.name; }

  constructor() {
    super(code);
    this.name = name;
  }
}();

export default {
  INTERNAL_SERVER_ERROR: getHttpError(),
  INPUT_PARAM_ERROR: getHttpError(400, 'INPUT_PARAM_ERROR'),
  VALIDATION_ERROR: getHttpError(400, 'VALIDATION_ERROR'),
  NOT_FOUND: getHttpError(404, 'NOT_FOUND')
};
