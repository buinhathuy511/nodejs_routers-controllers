const { httpMethods, httpStatusCodes } = require('../constants');

function handlePing(request, response) {
    response.statusCode = httpStatusCodes.OK;
    response.setHeader('Content-Type', 'text/plan')
    response.write('pong!');
    response.end();
}

module.exports = { handlePing }