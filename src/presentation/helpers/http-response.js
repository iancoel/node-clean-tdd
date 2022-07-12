const MissingParamError = require('./missing-param-error')
const UnauthorizedError = require('./unauthorized-error')

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

  static unauthorizedError () {
    return {
      statusCode: 401,
      body: new UnauthorizedError()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
