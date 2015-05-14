HTMLFormElement.prototype.attachValidators = function () {
   // Query all form elements & init the validators
   var elements = this.querySelectorAll('input, textarea, select');
   for ( var i=0, l=elements.length; i<l; i++ ) {
      var el         = elements[i],
          validators = JSON.parse( el.getAttribute('data-validators') );
      
      if ( validators ) {
         el.validators = [];
         validators.forEach( function ( name ) {
            el.validators.push( new Validator( name, el ) );
         });
      }
   }
   
   // Prevent form submission in case of invalid fields
   this.addEventListener('submit', function (e) {
      for ( var i=0, l=elements.length; i<l; i++ ) {
         var el = elements[i];
         if ( el.validators ) {
            el.validators.forEach( function ( validator ) {
               // clear error (if any)
               el.error && el.error.parentNode.removeChild( el.error );
               el.error = null;
               if ( ! validator.validate() ) {
                  // append error
                  el.error = document.createElement('span');
                  el.error.style.color = 'red';
                  el.error.innerHTML = validator.getErrorMessage();
                  el.parentNode.appendChild( el.error );
                  e.preventDefault();
               }
            });
         }
      }
   });
};

