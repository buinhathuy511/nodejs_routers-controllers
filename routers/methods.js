const { httpMethods } = require('../constants');

const routerMethods = {
    get: function(request, response, path, callback) {
        if (request.method === httpMethods.GET && request.url === path) {
            callback(request, response);
        }
    },
    post: function(request, response, path, callback) {
        if (request.method === httpMethods.POST && request.url === path) {
            callback(request, response);
        }
    },
    put: function(request, response, path, callback) {
        if (request.method === httpMethods.PUT && request.url === path) {
            callback(request, response);
        }
    },
    delete: function(request, response, path, callback) {
        if (request.method === httpMethods.DELETE && request.url === path) {
            callback(request, response);
        }
    }
};

module.exports = routerMethods;
