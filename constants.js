const httpStatusCodes = {
    OK: 200,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NO_CONTENT: 204,
}

const httpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

module.exports = {
    httpStatusCodes,
    httpMethods
};