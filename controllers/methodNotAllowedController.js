const { httpMethods, httpStatusCodes } = require('../constants');

function showMethodNotAllowed (request, response) {
    response.writeHeader(httpStatusCodes.METHOD_NOT_ALLOWED, { 'Content-Type' : 'text/plan' });
    response.end('Method Not Allowed');
}

module.exports = { showMethodNotAllowed };