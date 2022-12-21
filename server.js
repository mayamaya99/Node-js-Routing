const http = require("http");
// page one
let serveAsEntryPoint = (response) => {
  response.writeHead(200, { "content-Type": "text/html" }); // html text
  response.write("<h3>This is header3 of this app.</h3>"); // return h3
  response.write("<a href ='/nextpage'>Next Page  </a>");
  response.end();
};
// page two
let serveToSecondPage = (response) => {
  response.writeHead(200, { "content-Type": "text/html" });// code 200 all good
  response.write("<h2>This is Next page of this app.</h2>");
  response.write("<a href ='/'>Main Page  </a>");
  response.end();
};
// send error
let send404Error = (response) => {
  response.writeHead(404, { "content-Type": "text/html" }); // error
  response.end("What you asked for can not be found.");
};
let onRequest = (request, response) => {
  if (request.method == "GET" && request.url == "/") { // return url & GET
    serveAsEntryPoint(response);
  } else if (request.method == "GET" && request.url == "/nextpage")
    serveToSecondPage(response);
  else {
    send404Error(response);
  }
};
// listener
http.createServer(onRequest).listen(3000, "127.0.0.1");
console.log(" Our Server is running on port 3000");
