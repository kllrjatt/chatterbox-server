/* Import node's http module: */
var http = require('http');
// need request handler 
var handleRequest = require('./request-handler');
// add port to listen in on 
var port = 3000;
// give it current ip address 
var ip = '127.0.0.1';
// create a new server 
var server = http.createServer(handleRequest);
// show listen log on terminal when started 
console.log('Listening on http://' + ip + ':' + port);
//listen on assigned port on server 
server.listen(port, ip);

