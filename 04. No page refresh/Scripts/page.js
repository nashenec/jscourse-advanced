// namespace
MyWebsite = window.MyWebsite || {};

/**
 * @name Page
 * @type {Object}
 * 
 * Manages all client-side logic related to the page
 */
MyWebsite.Page = {
   
   /**
    * @method init
    * @public
    * 
    * Inits the page logic
    */
   init : function () {
      this.initNavigation();
   },
   
   /**
    * @method initNavigation
    * @private
    * 
    * Adds event handlers to navigation links so they don't refresh the page
    * but change the content dynamically
    */
   initNavigation : function () {
      var links = document.getElementById('sidebar').querySelectorAll('a');
      for ( var i=0, l=links.length; i<l; i++ ) {
         var link = links[i];
         link.addEventListener( 'click', function ( link, e ) {
            if ( this.activateLink( link ) ) {
               this.changeContent( link.href );
            }
            e.preventDefault();
         }.bind( this, link ) );
      }
   },
   
   /**
    * @method activateLink
    * 
    * Activates given link; deactivates currently active one
    * 
    * @param  {String} link 
    */
   activateLink : function ( link ) {
      if ( link.parentNode.classList.contains('current') ) {
         return false;
      }
      // remove active state of currently active link
      link.parentNode.parentNode.querySelector('.current').classList.remove('current');
      link.parentNode.classList.add('current');
      return true;
   },
   
   /**
    * @method changeContent
    * 
    * Inits the logic that loads & injects the new content
    * 
    * @param  {String} url
    */
   changeContent : function ( url ) {
      this.getContent( url, this.updateContent.bind(this) );
   },
   
   /**
    * @method changeContent
    * 
    * Executes request to get desired page; executes callback on success
    * 
    * @param  {String}     url
    * @param  {Function}   callback
    */
   getContent : function ( url, callback ) {
      var xhr = new XMLHttpRequest();
      xhr.open( 'GET', url, true );
      xhr.onload = function () {
         callback( this.responseText );
      };
      xhr.send();
   },
   
   /**
    * @method updateContent
    * 
    * Receives the new content as HTML string and takes care to replace existing
    * with this one.
    * 
    * @param  {String} html
    */
   updateContent : function ( html ) {
      var temp = document.createElement('div');
      temp.innerHTML = html;
      // update image
      document.getElementById('header').querySelector('img').src = temp.querySelector('#header img').src;
      // update main content
      document.getElementById('content').innerHTML = temp.querySelector('#content').innerHTML;
   }
   
};