# string-first-non-repeated [![Build Status](https://travis-ci.org/vivekimsit/string-first-non-repeated.svg?branch=master)](https://travis-ci.org/vivekimsit/string-first-non-repeated) [![Coverage Status](https://coveralls.io/repos/github/vivekimsit/string-first-non-repeated/badge.svg?branch=master)](https://coveralls.io/github/vivekimsit/string-first-non-repeated?branch=master)

> Find first non repeated character in the string.


## Install

```
$ npm install --save string-first-non-repeated
```


## Usage

```js
const stringFirstNonRepeated = require('string-first-non-repeated');

stringFirstNonRepeated('unicorns');
//=> 'unicorns & rainbows'
```


## API

### stringFirstNonRepeated(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global string-first-non-repeated
```

```
$ string-first-non-repeated --help

  Usage
    string-first-non-repeated [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ string-first-non-repeated
    unicorns & rainbows
    $ string-first-non-repeated ponies
    ponies & rainbows
```


## License

MIT © [](http://vivekpoddar.com)
