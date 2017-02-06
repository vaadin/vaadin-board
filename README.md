![Build Status](https://travis-ci.org/vaadin/vaadin-board.svg?branch=master)

# \<vaadin-board\>

Vaadin Board is a new flexible layout that allows you to build nice looking dashboard or intro screens to your application.
Vaadin Board key feature is how it effectively reorders the widgets on different screen sizes, maximizing the use of space and looking stunning.
Vaadin Board is using [Polymer 2](https://github.com/polymer/polymer/tree/2.0-preview)

## License

Vaadin Board is distributed under [Commercial Vaadin Add-on License version 3](http://vaadin.com/license/cval-3) (CVALv3). For license terms, see LICENSE.txt.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed.
Then run `polymer serve` to serve your application locally.

## Using Vaadin Board in your project

1. Install dependency from bower `bower install vaadin-board`
2. Add html import to your project and web-components polyfills.
```
 <link rel="import" href="bower_components/vaadin/vaadin-board.html">
 <script src="../../webcomponentsjs/webcomponents-lite.js"></script>
```

3. Create your first Vaadin Board

```
        <vaadin-board-row>
          <div class="top a" boar-span=2>top A</div>
          <div class="top b">top B</div>
          <div class="top d">top C</div>
        </vaadin-board-row>
        <vaadin-board-row>
          <div class="mid">mid</div>
        </vaadin-board-row>
        <vaadin-board-row>
          <div class="low a">low A</div>
          <vaadin-board-row>
            <div class="top a">low B / A</div>
            <div class="top b">low B / B</div>
            <div class="top c">low B / C</div>
            <div class="top d">low B / D</div>
          </vaadin-board-row>
        </vaadin-board-row>
      </vaadin-board>
```

## Viewing Demo Application

1. Clone the repository `git clone https://github.com/vaadin/vaadin-board.git`
2. Install [polyserve](https://www.npmjs.com/package/polyserve): `npm install -g polyserve`
3. When in the `vaadin-board` directory, run `bower install` to install dependencies
4. When in the `vaadin-board` directory, run `polyserve` to start the server.
5. Go to http://localhost:8080/components/vaadin-board/demo/index.html to see the demo.


Go to http://localhost:8080/components/vaadin-board/demo/index.html to see the demo.

## Running Tests

Run `polymer test` to run your application's test suite locally.
