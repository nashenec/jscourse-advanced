/**
 * @method Object.observe
 * @requires Object.clone
 * 
 * Observes the given object for the following changes:
 *    - add new property
 *    - update a property
 *    - delete of a property
 * 
 * @param  {Object}   obj      Object to observe
 * @param  {Function} callback Callback function to execute on change
 * 
 * @returns {Object}           Object instance
 */
Object.observe = Object.observe || function ( obj, callback ) {
   // Create a deep copy of the object that will be used for diffs
   var copy = Object.clone( obj );
   // Execute diff every 25ms
   setInterval( function () {
      var result = [];  // here we will keep information about the updates
      // First we will search for new properties or updated properties.
      // For that purpose we will loop the original object & compare with the 
      // cloned object.
      for ( var name in obj ) {
         if ( obj.hasOwnProperty( name ) ) {
            if ( ! copy.hasOwnProperty( name ) ) {
               // We have a new property
               var object = {};
               object[ name ] = obj[ name ];
               result.push({
                  name     : name,
                  type     : 'add',
                  object   : object
               });
               // Update the clone
               copy[ name ] = obj[ name ];
            } else if ( obj[ name ] !== copy[ name ] ) {
               // A property has a new value
               var object = {};
               object[ name ] = obj[ name ];
               result.push({
                  name     : name,
                  type     : 'update',
                  oldValue : copy[ name ],
                  object   : object
               });
               // Update the clone
               copy[ name ] = obj[ name ];
            }
         }
      }
      // Now we will search for deleted properties. 
      // To do that check we will loop the cloned object & check with the
      // original.
      for ( var name in copy ) {
         if ( copy.hasOwnProperty( name ) && ! obj.hasOwnProperty( name ) ) {
            // This property has been deleted
            result.push({
               name     : name,
               type     : 'delete',
               oldValue : copy[ name ],
               object   : {}
            });
            // Update the clone
            delete copy[ name ];
         }
      }
      
      if ( result.length ) {
         // We have updates - execute the callback
         callback( result );
      }
   }, 25 );
   
   return obj;
}

