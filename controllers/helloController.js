function handleHelloWorld(request, response) {
    response.statusCode = 200;
    response.setHeader = ('Content-Type', 'text/plan');
    response.write('Hello World');
    response.end();
}

module.exports = { handleHelloWorld };