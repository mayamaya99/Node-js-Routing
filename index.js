const http = require("http");

let onRequest = (request, response) => {
  // condition
    if (request.method == `GET` && request.url == "/") {
// if request is root then log the following
    console.log("user request");
    console.log(request.url);// Root
    console.log(request.method);//GET
  }
};
//Create server that send back response

http.createServer(onRequest).listen(3000, "127.0.0.1");
