const { createServer } = require('http');
const { router } = require('./routers/router');

const hostname = '127.0.0.1';
const port = 6969;

const server = createServer((request, response) => {
    router(request, response);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})