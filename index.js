'use strict';
module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}
	if (input.length === 1) {
		return input;
	}
	const map = Object.create(null);
	for (let char of input) {
		let count = map[char];
		if (count) {
			count += 1;
		} else {
			count = 1;
		}
		map[char] = count;
	}

	for (let char of input) {
		const count = map[char];
		if (count === 1) {
			return char;
		}
	}
	return '';
};
