const httpStatusCodes = require('../../constants').httpStatusCodes;

function handleLogin (request, response) {
    response.statusCode = httpStatusCodes.OK;
    response.setHeader('Content-Type', 'text/plain');
    response.write('Login Success!');
    response.end();
}

module.exports = handleLogin