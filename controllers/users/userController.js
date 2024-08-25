const httpStatusCodes = require('../../constants');

function handleLogin (request, response) {
    response.writeHead(httpStatusCodes.OK, { 'Content-Type': 'text/plain' });
    response.write('Login Success!');
    response.end();
}

module.exports = handleLogin