const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.end("Hello From Home page");
    } else if (req.url == '/aboutus') {
        res.end('Hello from aboutus');
    } else if (req.url == '/contactus') {
        res.end('Hello from contact us');
    } else if (req.url == '/userapi') {
        fs.readFile("userapi.json", "utf-8", (err, data) => {
            console.log(data);
            const objData = JSON.parse(data);
            res.end(objData[0].first_name);
        });

    } else {
        res.writeHead(404);
        res.end('404 error. Page doesnt exist');
    }



});

server.listen(5000, () => console.log('listening to the 5000:'));