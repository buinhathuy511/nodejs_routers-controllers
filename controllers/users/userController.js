const httpStatusCodes = require('../../constants');

function getUser(request, response) {
    response.write('Get User');
    response.end();
};

function createUser(request, response) {
    response.write('Create User');
    response.end();
};

function updateUser(request, response) {
    response.write('Update User');
    response.end();
};

function deleteUser(request, response) {
    response.write('Delete User');
    response.end();
};

function handleMethodNotAllowed (request, response) {
    response.writeHead(httpStatusCodes.METHOD_NOT_ALLOWED, { 'Content-Type': 'text/plain' });
    response.write('Method not allowed');
    response.end();
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser,
    handleMethodNotAllowed,
};