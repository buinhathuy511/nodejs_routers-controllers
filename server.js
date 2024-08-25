const createServer = require('http').createServer;
const router = require('./routers/appRouter');

const hostname = 'localhost';
const port = 9876;

const server = createServer((request, response) => {
    router.run(request, response);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})