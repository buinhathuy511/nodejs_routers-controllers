const httpStatusCodes = require('../../constants').httpStatusCodes;

function handleLogin (request, response) {
    response.statusCode = httpStatusCodes.NO_CONTENT;
    response.end();
}

module.exports = handleLogin