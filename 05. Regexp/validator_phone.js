if ( typeof module != 'undefined' ) {
   // NodeJS
   module.exports = function () {
      return validatePhone;
   }
}

function validatePhone( phone ) {
   return false;
}