const http = require("http");

let onRequest = (request, response) => {
    if (request.method == `GET` && request.url == "/") {
        console.log("user made request");
        console.log(request.url);
        console.log(request.method);
    }
};

http.createServer(onRequest).listen(3000, "127.0.0.1");