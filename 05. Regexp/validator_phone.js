if ( typeof module != 'undefined' ) {
   // NodeJS
   module.exports = validatePhone;
}

function validatePhone( phone ) {
   return /^(\+\d{3}\s?)?\(?\d{2,}[\d\-\s\/\)]{5,}$/.test( phone );
}