var validateEmail = require('../validator_email.js');

// Valid emails
[
   'email@example.com',
   'firstname.lastname@example.com',
   'email@subdomain.example.com',
   'firstname+lastname@example.com',
   'email@123.123.123.123',
   'email@[123.123.123.123]',
   '“email”@example.com',
   '1234567890@example.com',
   'email@example-one.com',
   '_______@example.com',
   'email@example.name',
   'email@example.museum',
   'email@example.co.jp',
   'firstname-lastname@example.com',
   'much.“more\ unusual”@example.com',
   'very.unusual.“@”.unusual.com@example.com',
   'very.“(),:;<>[]”.VERY.“very@\\ "very”.unusual@strange.example.com'
].forEach( function ( email ) {
   console.assert( validateEmail( email ), email + ' should be validated as valid, but it is reported as invalid' );
});

// Invalid emails
[
   'plainaddress',
   '#@%^%#$@#$@#.com',
   '@example.com',
   'Joe Smith <email@example.com>',
   'email.example.com',
   'email@example@example.com',
   '.email@example.com',
   'email.@example.com',
   'email..email@example.com',
   'あいうえお@example.com',
   'email@example.com (Joe Smith)',
   'email@example',
   'email@-example.com',
   'email@example.web',
   'email@111.222.333.44444',
   'email@example..com',
   'Abc..123@example.com',
   '“(),:;<>[\]@example.com',
   'just"not"right@example.com',
   'this\ is"really"not\allowed@example.com'
].forEach( function ( email ) {
   console.assert( ! validateEmail( email ), email + ' should be validated as invalid, but it is reported as valid' );
});