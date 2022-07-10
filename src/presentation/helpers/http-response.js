const MissingParamError = require('./missing-param-error')

module.exports = class HttpResponse {
  static badRequest (missingParamName) {
    return {
      statusCode: 400,
      body: new MissingParamError(missingParamName)
    }
  }

  static serverError () {
    return {
      statusCode: 500
    }
  }
}
