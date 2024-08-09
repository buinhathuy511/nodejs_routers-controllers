const httpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
}

const httpStatusCodes = {
    OK: 200,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405
}

module.exports = { httpMethods, httpStatusCodes };