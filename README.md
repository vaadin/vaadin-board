![Build Status](https://travis-ci.org/vaadin/vaadin-board.svg?branch=master)

# \<vaadin-board\>

Allows to add responsive layouts., with several features.


## License

Vaadin Board is distributed under [Commercial Vaadin Add-on License version 3](http://vaadin.com/license/cval-3) (CVALv3). For license terms, see LICENSE.txt.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your application locally.

## Using Vaadin Board in your project

### Install Vaadin Board
```
$ bower install --save vaadin/vaadin-board
```

### Add html import
<link rel="import" href="bower_components/vaadin/vaadin-board.html">

### Create your first Vaadin Board

        <vaadin-board-row>
          <div class="top a">top A</div>
          <div class="top b">top B</div>
          <div class="top c">top C</div>
          <div class="top d">top D</div>
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

## Viewing Demo Application

```
$ polymer serve
```

Go to http://localhost:8080/components/vaadin-board/demo/index.html to see the demo.

## Building Your Application

```
$ polymer build
```

This will create a `build/` folder with `bundled/` and `unbundled/` sub-folders
containing a bundled (Vulcanized) and unbundled builds, both run through HTML,
CSS, and JS optimizers.

You can serve the built versions by giving `polymer serve` a folder to serve
from:

```
$ polymer serve build/bundled
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
