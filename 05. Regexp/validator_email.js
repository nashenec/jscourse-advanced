if ( typeof module != 'undefined' ) {
   // NodeJS
   module.exports = validateEmail;
}

function validateEmail( email ) {
   // TODO: Find a way to match "something.something" as valid,
   // but detect "something..something" as invalid, with regex only.
   var match = /^[^\.]([“”\s\w\-\.\+]{1,})[“”\s\w\-\+]{2}@(?:(?:[a-z\d][a-z\d\-]+\.)+(?:(?!web)[a-z]{2,8})|(?:(\[?\d{1,3})\.){3}\2\]?)$/i.exec( email );
   return match && match[1].indexOf('..') == -1 ? true : false;
}