// add defualt headers for Cors communication 
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  'Content-Type': 'application/json'
};

// message storage for chatter box 
// add first message to get test data back
var messages = [{
  text: 'First Message',
  roomname: 'lobby',
  username: 'Gunpreet'
}];

var sendResponse = function (response, data, statusCode) {
  // The outgoing status.
  if (!statusCode) {
    statusCode = 200;
  }
  // check what type of request has been sent by the client
  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  response.writeHead(statusCode, defaultCorsHeaders);
  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  response.end(JSON.stringify(data));
};

exports.requestHandler = function (request, response) {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  // check the request type to determin what to do 

  // declare response code variable 
  var responseCode;

  if (request.method === 'GET') {
    // send appropriate response for get , send messages array as result 
    sendResponse(response, { results: messages }, responseCode);
  } else if (request.method === 'POST') {
    // assign correct value of response code 
    responseCode = 201;
    // send appropriate response for post
    // send message sent response on post
    sendResponse(response, 'Message Sent!', responseCode);
  } else if (request.method === 'OPTIONS') {
    // assign correct value of response code 
    responseCode = 200;
    // send appropriate response for options
    // send no response for options
    sendResponse(response, null, responseCode);
  }
};

