function handlePing(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plan')
    response.write('pong!');
    response.end();
}

module.exports = { handlePing }