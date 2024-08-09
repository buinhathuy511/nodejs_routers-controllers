const { httpMethods, httpStatusCodes } = require('../constants');

function showNotFound(request, response) {
    response.writeHeader(httpStatusCodes.NOT_FOUND), { 'Content-Type' : 'text/plan' };
    response.end('Not Found');
}

module.exports = { showNotFound };