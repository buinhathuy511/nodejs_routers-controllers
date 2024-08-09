const { handlePing } = require('../controllers/pingController')
const { handleHelloWorld } = require('../controllers/helloController')
const { showNotFound } = require('../controllers/notFoundController')
const { showMethodNotAllowed } = require('../controllers/methodNotAllowedController');
const { httpMethods, httpStatusCodes } = require('../constants');

class Router {
    handleRouting(request, response) {
        switch(request.url) {
            case '/ping':
                if (request.method === httpMethods.GET) {
                    handlePing(request, response);
                } else {
                    showMethodNotAllowed(request, response);
                }
                break;
            case '/':
                if (request.method === httpMethods.GET) {
                    handleHelloWorld(request, response);
                } else {
                    showMethodNotAllowed(request, response);
                }
                break;
            default:
                showNotFound(request, response);
        }
    }
}

module.exports = new Router();