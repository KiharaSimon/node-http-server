const http = require('http'); //core module

const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Simon Kihara<h1></body></html>');
})
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});