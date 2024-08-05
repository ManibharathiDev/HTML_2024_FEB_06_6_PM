const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
 console.log(req.url);
    if(req.url == "/")
    {
        res.write("It is home Page");
    }
    else if(req.url == "/about")
    {
        res.write("It is Aboute page")
    }
    else{
        res.write("404 Not Found");
    }
  //res.write("i am good");
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});