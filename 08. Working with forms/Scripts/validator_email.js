Validator.register({
   name           : 'email',
   pattern        : /^[a-z][\w\-\.]{2,}@[a-z\d\-]+\.[a-z]{2,8}$/i,
   error_message  : 'Please enter valid email address'
});

