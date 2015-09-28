# APP UI: Component

A bare minimum custom element for [APP UI](http://github.com/app-ui) using [VanillaJS](http://vanilla-js.com/).

This is merely a template, designed to make it easy to get started creating a new APP UI element.


## Examples

* [Click to view](./examples/index.html)


## Install

Using bower:
```
bower install app.ui.component
```

Import from github
```
git pull git://github.com/app-ui/component.git master
```

Simply search and replace ```component``` and ```Component``` with your UI element name.

The component contains all the basic structure to get started. The stylesheet is created using Less and then been compiled to a plain CSS file. It's your choice if you want to continue developing in Less or CSS.



## Usage

1. Import Web Components' polyfill

```html
<script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
```

2. Import Custom Element:
```html
<link rel="import" href="bower_components/app.ui.component">
```

3. Start using it!

```html
<ui-component></ui-component>
```


## Attributes

...


## Events

...


## Credits

Initiated by Makis Tracend ( [@tracend](http://tracend.me) )

Distributed through [Makesites.org](http://makesites.org)

### License

Released under the [MIT License](http://makesites.org/licenses/MIT)
