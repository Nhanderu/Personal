var http = require("http");
var fs = require("fs");

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var server = http.createServer(function (request, response) {
    if (request.url == "/en") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Hello, world!</h1>");
        response.end();
    }
    else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Olá, mundo!</h1>");
        response.end();
    }
});

server.listen(server_port, server_ip_address, function () {
    console.log("Running on " + server_ip_address + ":" + server_port + ".");
});