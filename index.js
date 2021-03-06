const http = require('http');

const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    console.log(req.headers)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<html><body><h1>Christine Wambui</h1></body></html>");
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})