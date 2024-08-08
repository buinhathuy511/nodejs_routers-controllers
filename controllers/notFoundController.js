function showNotFound(request, response) {
    response.writeHeader(404), { 'Content-Type' : 'text/plan' };
    response.end('Not Found');
}

module.exports = { showNotFound };