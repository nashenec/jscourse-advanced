if ( typeof module != 'undefined' ) {
   // NodeJS
   module.exports = validateEmail;
}

function validateEmail( email ) {
   return /^[a-z][\w\-\.]{2,}@[a-z\d\-]+\.[a-z]{2,8}$/i.test( email );
}