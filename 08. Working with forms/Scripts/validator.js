( function () {

var registry = {};

var Validator = this.Validator = function ( name, el ) {
   this.name   = name;
   this.el     = el;
}

Validator.prototype.validate = function () {
   return registry[ this.name ].pattern.test( this.el.value );
};

Validator.prototype.getErrorMessage = function () {
   return registry[ this.name ].error_message;
}

Validator.register = function ( params ) {
   registry[ params.name ] = params;
}

})();

