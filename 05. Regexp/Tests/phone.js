var validatePhone = require('../validator_phone.js');

// Valid phones
[
   '02/123456',
   '02/1234567',
   '(02)123-45-67',
   '(07125)1234',
   '07152/12-23',
   '0888/123456',
   '0888 123456',
   '0888123456',
   '0888 12 34 56',
   '0888 123 456',
   '0888 123-456',
   '0888-12-34-56',
   '0888/123456',
   '+359888123456',
   '+359 888 123 456'
].forEach( function ( phone ) {
   console.assert( validatePhone( phone ), phone + ' should be validated as valid, but it is reported as invalid' );
});

// Invalid phones
[
   'foo',
   '123456',
   '123456foo',
   '1-2-3-4-5-6'
].forEach( function ( phone ) {
   console.assert( ! validatePhone( phone ), phone + ' should be validated as invalid, but it is reported as valid' );
});