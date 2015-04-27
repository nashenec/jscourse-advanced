if ( typeof module != 'undefined' ) {
   // NodeJS
   module.exports = validatePhone;
}

function validatePhone( phone ) {
   return /^\+?[\d\s\-]{3,16}$/.test( phone );
}