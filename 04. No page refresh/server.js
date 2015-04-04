var http = require('http');
var fs   = require('fs');

http.createServer( function ( request, response ) {
   var input = '';
   request.on( 'data', function ( data ) {
      input += data;
   });
   
   request.on( 'end', function () {
      var ext = request.url.substr( request.url.lastIndexOf('.') + 1 );
      response.writeHead( 200, {
         'Content-type' : ({
            html  : 'text/html',
            css   : 'text/css',
            js    : 'text/javascript',
            jpg   : 'image'
         })[ext] 
      } );
      response.end( fs.readFileSync( '.' + request.url ) );
   });
}).listen( 8080, '127.0.0.1', function () {} );