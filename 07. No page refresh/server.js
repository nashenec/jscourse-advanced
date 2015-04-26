var http = require('http');
var fs   = require('fs');
var jsdom  = require('jsdom');

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
      
      var content = fs.readFileSync( '.' + request.url );
      
      if ( request.headers['x-requested-with'] == 'XMLHttpRequest' ) {
         jsdom.env({
            html  : content,
            done  : function ( errors, window ) {
               var document = window.document;
               response.writeHead( 200, { 'Content-type' : 'text/plain' } );
               response.end( JSON.stringify({
                  title    : document.title,
                  image    : document.getElementById('header').querySelector('img').getAttribute('src'),
                  content  : document.getElementById('content').innerHTML
               }) );
            }
         });
         return;
      }
      
      response.end( content );
   });
}).listen( 8080, '127.0.0.1', function () {} );