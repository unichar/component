// Backbone.js Template extension
//
// Created by: Lyndel Thomas (@ryndel)
// Source: https://github.com/backbone-ui/_template
//
// Licensed under the MIT license: 
// http://makesites.org/licenses/MIT

(function(_, Backbone) {
	
	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	// Support backbone app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined( APP.View) ) ? APP.View : Backbone.View;
	
	Backbone.UI.Template = View.extend({
		
		el : '.ui-template',
		
		options : {
			// navEl : "nav", 
			// mainEl : ".main"
		},
		
		events: {
			"click .ui-template-control": "toggle"
		},
		
		toggle: function( e ) {
			e.preventDefault();
			$(this.el).find('.ui-template-target').toggleClass('ui-element-active');
		}, 
		
		dooSomething: function() {
			
		},
		
		initialize: function(model, options){
			
			_.bindAll(this, 'render'); 
			
		},
	});
	
})(this._, this.Backbone);