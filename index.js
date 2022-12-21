const http = require("http");

let onRequest = (request, response) => {
  // condition
  if (request.method == `GET` && request.url == "/") {
    console.log("user request");
    console.log(request.url);
    console.log(request.method);
  }
};
//Create server that send back response

http.createServer(onRequest).listen(3000, "127.0.0.1");
