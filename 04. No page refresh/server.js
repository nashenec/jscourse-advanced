var http = require('http');

http.createServer( function ( request, response ) {
   var input = '';
   request.on( 'data', function ( data ) {
      input += data;
   });
   
   request.on( 'end', function () {
      response.writeHead( 200, { 'Content-type' : 'text/plain' } );
      response.end( 'Hello, Node!' );
   });
}).listen( 8080, '127.0.0.1', function () {} );