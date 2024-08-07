const { handlePing } = require('../controllers/pingController')
const { handleHelloWorld } = require('../controllers/helloController')

function router(req, res) {
    switch(req.url) {
        case '/ping':
            if (req.method === 'GET') {
                handlePing(req, res);
            } else {
                res.writeHeader(405);
                res.end('Method Not Allowed');
            }
            break;
        case '/':
            if (req.method === 'GET') {
                handleHelloWorld(req, res);
            } else {
                res.writeHeader(405);
                res.end('Method Not Allowed');
            }
            break;
        default:
            res.writeHeader(404);
            res.end('Not Found');
    }
}

module.exports = { router }