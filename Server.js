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
        response.writeHead(200, { "Content-Type": "text/html" });

        var index = fs.readFileSync(__dirname + "/Index.html");
        response.write(index);
        var style = fs.readFile(__dirname + "/Style.css");
        response.write(style);
        var imageProfile = fs.readFile(__dirname + "/Media/Profile.jpg");
        response.write(imageProfile);
        var imageStars = fs.readFile(__dirname + "/Media/Background/Stars.png");
        response.write(imageStars);
        var imageStripes = fs.readFile(__dirname + "/Media/Background/Stripes.png");
        response.write(imageStripes);
        var imageTexture = fs.readFile(__dirname + "/Media/Background/Texture.png");
        response.write(imageTexture);

        response.end();
    }
});

server.listen(server_port, server_ip_address, function () {
    console.log("Running on " + server_ip_address + ":" + server_port + ".");
});