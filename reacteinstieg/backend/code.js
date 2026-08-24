const http = require("http"); //greift auf die lib http zu (macht es einfach Webserver zu hosten)
const fs = require("fs"); // lib für file managment
const filename = "datenbank.json";

const server = http.createServer((request, response) => {
  const method = request.method;
  response.setHeader("Content-Type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

  if (method == "GET") {
    response.statusCode = 200;
    response.end(fs.readFileSync(filename));
  }
  if (method == "POST") {
    let data = "";
    request.on("readable", () => {
      let chunk = request.read();
      if (chunk) {
        data += chunk;
      }
    });
    request.on("end", () => {
      fs.writeFileSync(filename, data);
      response.statusCode = 200;
      response.end();
    });
  }
});

const hostname = "localhost";
const port = 8080;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
