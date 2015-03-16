var http = require("http");
var fs = require("fs");

var server = http.createServer(function (request, response) {
    if (request.url == "/en") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Hello, world!</h1>");
        response.end();
    }
    else if (request.url == "/en") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Olá, mundo!</h1>");
        response.end();
    }
});

server.listen(80, function () {
    console.log("Rodando na porta 80.");
});