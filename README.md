# is-anything-client
An [npm package](https://www.npmjs.com/package/is-anything-client) for [is-anything.com](https://is-anything.com) that allows to check subject against anything.

## Purpose

Package was created as a replacement for [is-thirteen](https://github.com/jezen/is-thirteen) and [is-not-thirteen](https://github.com/haggy/is-not-thirteen) packages. Original packages contain too many issues and huge dev response time while world is not sleeping and requirements are constantly changing.  

## Installation

```sh
npm i is-anything-client
```

## Usage

```javascript
const is = require('is-anything-client');

...
await is(13).thirteen();
await is('habr.com').awesome();
await is('youtube').down();
```

## Test

```shell
npm test
```

## Server

Currently server under extremely agile development. You can find it here: [is-anything-server](https://github.com/IhnatKlimchuk/is-anything-server)

## License

THE BEERWARE LICENSE
