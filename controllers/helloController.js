const { httpMethods, httpStatusCodes } = require('../constants');

function handleHelloWorld(request, response) {
    response.statusCode = httpStatusCodes.OK;
    response.setHeader = ('Content-Type', 'text/plan');
    response.write('Hello World');
    response.end();
}

module.exports = { handleHelloWorld };