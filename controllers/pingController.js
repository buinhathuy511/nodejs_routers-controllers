function handlePing(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plan')
    res.write('pong!');
    res.end();
}

module.exports = { handlePing }