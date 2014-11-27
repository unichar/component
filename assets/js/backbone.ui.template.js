/* Backbone UI: Template
 * Source: https://github.com/backbone-ui/template
 * Copyright © Makesites.org
 *
 * Initiated by Lyndel Thomas (@ryndel)
 * Distributed through [Makesites.org](http://makesites.org)
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

(function($, _, Backbone) {

	// support for Backbone APP() view if available...
	var isAPP = ( typeof APP !== "undefined" && typeof APP.View !== "undefined" );
	var View = ( isAPP ) ? APP.View : Backbone.View;

	var Template = View.extend({

		// el: function(){ return $('<'+ this.options.tagName +' class="ui-template'+ this.options.className + ' ' + this.options.position + '">'+ this.options.text +'</'+ this.options.tagName +'>') },
		el: "", 
		
		options : {
			scroll : true,
			className : "",
			tagName : "a",
			text: "",
			scrollOffset : 0,
			target: false,
			targetOffset : 0,
			position: "bottom-right"
		},

		events: {
			// "click"  : "someFunction"
		},

		initialize: function(options){
			// $(this.el).appendTo('body');

			_.bindAll(this, 'render');

			// continue...
			return View.prototype.initialize.call(this, options);

		},
		
		someFunction: function() {
			
		},

	});


	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	Backbone.UI.Template = Template;

	// Support module loaders
	if ( typeof module === "object" && module && typeof module.exports === "object" ) {
		// Expose as module.exports in loaders that implement CommonJS module pattern.
		module.exports = Template;
	} else {
		// Register as a named AMD module, used in Require.js
		if ( typeof define === "function" && define.amd ) {
			
			define( [], function () { return Template; } );
		}
	}
	// If there is a window object, that at least has a document property
	if ( typeof window === "object" && typeof window.document === "object" ) {
		window.Backbone = Backbone;
		// update APP namespace
		if( typeof APP != "undefined" && (_.isUndefined( APP.UI ) || _.isUndefined( APP.UI.Template ) ) ){
			APP.UI = APP.UI || {};
			APP.UI.Template = Backbone.UI.Template;
			window.APP = APP;
		}
	}



})(this.jQuery, this._, this.Backbone);