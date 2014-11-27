(function() {
	// Creates an object based in the HTML Element prototype
	var element = Object.create(HTMLElement.prototype);
	var view;

	// Fires when an instance of the element is created
	element.createdCallback = function() {
		// instantiate view
		view = new APP.UI.Component();

	};

	// Fires when an instance was inserted into the document
	element.attachedCallback = function() {};

	// Fires when an instance was removed from the document
	element.detachedCallback = function() {};

	// Fires when an attribute was added, removed, or updated
	element.attributeChangedCallback = function(attr, oldVal, newVal) {};

	document.registerElement('ui-component', {
		prototype: element
	});
}());
