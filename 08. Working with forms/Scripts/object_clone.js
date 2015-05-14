/**
 * @method Object.clone
 * 
 * Creates & returns deep clone of the given object
 * 
 * @param  {Object} obj
 * 
 * @returns {Object}
 */
Object.clone = Object.clone || function ( obj ) {
   var copy = new obj.constructor();
   for ( var name in obj ) {
      if ( obj.hasOwnProperty( name ) ) {
         if ( typeof obj[ name ] == 'object' && obj[ name ] ) {
            copy[ name ] = Object.clone( obj[ name ] );
         } else {
            copy[ name ] = obj[ name ];
         }
      }
   }
   return copy;
}

