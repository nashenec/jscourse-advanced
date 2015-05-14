// Protect the global environment...
( function () {

var events_map = {
   "text"      : "keyup",
   "password"  : "keyup",
   "textarea"  : "keyup",
   "file"      : "change",
   "select"    : "change",
   "checkbox"  : "click",
   "radio"     : "click"
};

function getEventName( el ) {
   var type = el.tagName.toLowerCase() == 'input' ? el.type : el.tagName;
   return events_map[ type.toLowerCase() ];
}

HTMLFormElement.prototype.observe = function ( callback ) {
   // Query all form elements & add the callback as listener to each
   var elements = this.querySelectorAll('input, textarea, select');
   for ( var i=0, l=elements.length; i<l; i++ ) {
      var el = elements[i], event = getEventName( el );
      if ( event ) {
         el.addEventListener( event, function ( e ) {
            callback( this.name, this.value );
         });
      }
   }
}

})();

