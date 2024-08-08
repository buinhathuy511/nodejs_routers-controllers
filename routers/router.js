const { handlePing } = require('../controllers/pingController')
const { handleHelloWorld } = require('../controllers/helloController')
const { showNotFound } = require('../controllers/notFoundController')
const { showMethodNotAllowed } = require('../controllers/methodNotAllowedController');

function router(request, response) {
    switch(request.url) {
        case '/ping':
            if (request.method === 'GET') {
                handlePing(request, response);
            } else {
                showMethodNotAllowed(request, response);
            }
            break;
        case '/':
            if (request.method === 'GET') {
                handleHelloWorld(request, response);
            } else {
                showMethodNotAllowed(request, response);
            }
            break;
        default:
            showNotFound(request, response);
    }
}

module.exports = { router }