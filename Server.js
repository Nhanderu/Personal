var http = require("http");
var fs = require("fs");

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var createResponse = function (error, response, data, contentType) {
    if(error) {
        response.writeHead(404, {"Content-type": "text/plain"});
        response.end("File not found.");
    }

    else {
    response.writeHead(200, { "Content-Type": contentType });
    response.end(data);
    }
};

var server = http.createServer(function (request, response) {
    if (request.url == "/en") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Site on maintenance!</h1>");
        response.end();
    }
    else {

        fs.readFile(__dirname + '/Index.html', function(error, html) {
            createResponse(error, response, html, "text/html")
        });

        fs.readFile(__dirname + '/Style.css', function(error, css) {
            createResponse(error, response, css, "text/css")
        });

        fs.readFile(__dirname + '/Media/Profile.jpg', function(error, image) {
            createResponse(error, response, image, "image/jpeg")
        });

        fs.readFile(__dirname + '/Media/Background/Stars.png', function(error, image) {
            createResponse(error, response, image, "image/png")
        });

        fs.readFile(__dirname + '/Media/Background/Stripes.png', function(error, image) {
            createResponse(error, response, image, "image/png")
        });

        fs.readFile(__dirname + '/Media/Background/Texture.png', function(error, image) {
            createResponse(error, response, image, "image/png")
        });
    }
});

server.listen(server_port, server_ip_address, function () {
    console.log("Running on " + server_ip_address + ":" + server_port + ".");
});