const http = require('http');
const fs = require('fs');

const dir = 'NodeJS';

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
});

const PORT = 4000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Server: http://${HOST}:${PORT}`);
});

fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`Directory created: ${dir}`);
    }
});