if ( typeof module != 'undefined' ) {
   // NodeJS
   module.exports = function () {
      return validateEmail;
   }
}

function validateEmail( email ) {
   return false;
}