function handleHelloWorld(req, res) {
    res.statusCode = 200;
    res.setHeader = ('Content-Type', 'text/plan');
    res.write('Hello World');
    res.end();
}

module.exports = { handleHelloWorld };