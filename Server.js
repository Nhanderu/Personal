var http = require("http");
var fs = require("fs");

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var createResponse = function (fs, response, path, contentType) {
    fs.readFile(path, function (error, data) {
        if (error) {
            response.writeHead(404, { "Content-type": "text/plain" });
            response.end("File not found.");
        }

        else {
            response.writeHead(200, { "Content-Type": contentType });
            response.write(data);
            response.end(data);
        }
    });
};

var server = http.createServer(function (request, response) {
    if (request.url == "/en") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Site on maintenance!</h1>");
        response.end();
    }
    else {
        createResponse(fs, response, __dirname + '/Index.html', "text/html");
        createResponse(fs, response,__dirname + '/Style.css', "text/css");
        createResponse(fs, response, __dirname + '/Media/Profile.jpg', "image/jpeg");
        createResponse(fs, response,__dirname + '/Media/Background/Stars.png', "image/png");
        createResponse(fs, response,__dirname + '/Media/Background/Stripes.png', "image/png");
        createResponse(fs, response,__dirname + '/Media/Background/Texture.png', "image/png");
    }
});

server.listen(server_port, server_ip_address, function () {
    console.log("Running on " + server_ip_address + ":" + server_port + ".");
});