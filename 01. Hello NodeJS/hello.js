require( 'mootools' );
var http = require('http');
var url  = require('url');

// start a server
var server = http.createServer( function ( request, response ) {
   // capture the input
   var input = ''
   request.on( 'data', function ( data ) {
      input += data;
   });
   // return response
   request.on( 'end', function () {
      // write headers
      response.writeHead( 200, { 'Content-Type' : 'text/plain' } );
      // write body - replace variables with query string params
      response.end( 'Hello, {name}!'.substitute( url.parse(request.url, true).query ) );
   });
}).listen( 8080, '127.0.0.1', function () {
   console.log('Listening on http://%s:%s', server.address().address, server.address().port);
});