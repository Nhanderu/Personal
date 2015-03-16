var http = require("http");
var fs = require("fs");

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var server = http.createServer(function (request, response) {
    if (request.url == "/en") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<h1>Site on maintenance!</h1>");
        response.end();
    }
    else {
        var data;
        var contentType = "";
        fs.readFile(__dirname + '/Index.html', function(error, html) {
            contentType = "text/html";
            data = html;
        });

        fs.readFile(__dirname + '/Style.css', function(error, css) {
            contentType = "text/css";
            data = css;
        });

        fs.readFile(__dirname + '/Media/Profile.jpg', function(error, image) {
            contentType = "image/jpeg";
            data = image;
        });

        fs.readFile(__dirname + '/Media/Background/Stars.png', function(error, image) {
            contentType = "image/png";
            data = image;
        });

        fs.readFile(__dirname + '/Media/Background/Stripes.png', function(error, image) {
            contentType = "image/png";
            data = image;
        });

        fs.readFile(__dirname + '/Media/Background/Texture.png', function(error, image) {
            contentType = "image/png";
            data = image;
        });

        response.writeHead(200, { "Content-Type": contentType });
        response.end(data);
    }
});

server.listen(server_port, server_ip_address, function () {
    console.log("Running on " + server_ip_address + ":" + server_port + ".");
});