function showMethodNotAllowed (request, response) {
    response.writeHeader(405, { 'Content-Type' : 'text/plan' });
    response.end('Method Not Allowed');
}

module.exports = { showMethodNotAllowed };