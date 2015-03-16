var http = require("http");
var fs = require("fs");
var async = require('async');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var server = http.createServer(function (request, response) {
    if (request.url == "/en") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Site on maintenance!</h1>");
        response.end();
    }
    else {
        var count = 0;
        var handler = function (contentType) {
            return function (error, data) {
                count++;

                if (error) {
                    response.writeHead(404, { "Content-type": "text/plain" });
                    response.end("File not found.");
                }

                else {
                    response.writeHead(200, { "Content-Type": contentType });
                    response.write(data);
                }

                if (count == 6) {
                    respo.end();
                }
            };
        };

        fs.readFile(__dirname + "/Index.html", handler("text/html"));
        fs.readFile(__dirname + "/Style.css", handler("text/css"));
        fs.readFile(__dirname + "/Media/Profile.jpg", handler("image/jpeg"));
        fs.readFile(__dirname + "/Media/Background/Stars.png", handler("image/png"));
        fs.readFile(__dirname + "/Media/Background/Stripes.png", handler("image/png"));
        fs.readFile(__dirname + "/Media/Background/Texture.png", handler("image/png"));
    }
});

server.listen(server_port, server_ip_address, function () {
    console.log("Running on " + server_ip_address + ":" + server_port + ".");
});