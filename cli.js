#!/usr/bin/env node
'use strict';
const meow = require('meow');
const stringFirstNonRepeated = require('.');

const cli = meow(`
	Usage
	  $ string-first-non-repeated [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ string-first-non-repeated
	  unicorns & rainbows
	  $ string-first-non-repeated ponies
	  ponies & rainbows
`);

console.log(stringFirstNonRepeated(cli.input[0]));
